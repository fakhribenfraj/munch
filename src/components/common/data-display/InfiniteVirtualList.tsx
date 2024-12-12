"use client";

import { Box } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import { ActionResponse } from "@/types/api";

type InfiniteVirtualListProps = {
  itemHeight?: number;
  itemWidth?: number;
  gutterSize?: number;
  loadingComponent: React.ReactNode;
  itemComponent: (item: any) => React.ReactNode;
  fetchItems: () => Promise<ActionResponse<unknown[]>>;
};
export default function InfiniteVirtualList({
  fetchItems,
  loadingComponent,
  itemComponent,
  itemHeight = 350,
  itemWidth = 300,
  gutterSize = 16,
}: InfiniteVirtualListProps) {
  const [items, setItems] = useState<unknown[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const gridRef = useRef<Grid | null>(null);

  const isItemLoaded = (index: number) => !hasMore || index < items.length;

  const loadMoreItems = useCallback(async (startIndex: number) => {
    try {
      const res = await fetchItems();
      setItems((prev) => [...prev, ...res.data]);
      setHasMore(false);
    } catch (error) {
      console.error("Failed to load more items:", error);
    }
  }, []);

  const getRowHeight = () => itemHeight; // Fixed height for all rows

  const renderCell = useCallback(
    ({
      columnIndex,
      rowIndex,
      style,
      isItemLoaded,
      data,
    }: {
      columnIndex: number;
      rowIndex: number;
      style: React.CSSProperties;
      data: unknown[];
      isItemLoaded: (index: number) => boolean;
    }) => {
      const itemsPerRow = Math.max(
        1,
        Math.floor((style.width as number) / itemWidth)
      );
      const index = rowIndex * itemsPerRow + columnIndex;
      const globalStyles = {
        ...style,
        left: (style.left as number) + gutterSize,
        top: (style.top as number) + gutterSize,
        width: (style.width as number) - gutterSize,
        height: (style.height as number) - gutterSize,
      };

      if (!isItemLoaded(index)) {
        return <Box style={globalStyles}>{loadingComponent}</Box>;
      }

      const item = data[index];
      if (!item) return null;

      return <Box style={globalStyles}>{itemComponent(item)}</Box>;
    },
    [itemComponent, loadingComponent, itemWidth, gutterSize]
  );

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <AutoSizer>
        {({ height, width }) => {
          const itemsPerRow = Math.max(1, Math.floor(width / itemWidth));
          const rowCount = Math.ceil(
            items.length / itemsPerRow + (hasMore ? 1 : 0)
          );
          const cellWidth = width / itemsPerRow;

          return (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={rowCount * itemsPerRow}
              loadMoreItems={loadMoreItems}
            >
              {({ onItemsRendered, ref }) => (
                <Grid
                  height={height}
                  width={width}
                  columnCount={itemsPerRow}
                  columnWidth={() => cellWidth} // Use dynamic cell width
                  rowCount={rowCount}
                  rowHeight={getRowHeight}
                  itemData={items}
                  onItemsRendered={({
                    visibleRowStartIndex,
                    visibleRowStopIndex,
                  }) => {
                    onItemsRendered({
                      overscanStartIndex: visibleRowStartIndex * itemsPerRow,
                      overscanStopIndex:
                        (visibleRowStopIndex + 1) * itemsPerRow - 1,
                      visibleStartIndex: visibleRowStartIndex * itemsPerRow,
                      visibleStopIndex:
                        (visibleRowStopIndex + 1) * itemsPerRow - 1,
                    });
                  }}
                  ref={(instance) => {
                    ref(instance);
                    gridRef.current = instance;
                  }}
                >
                  {(props) => renderCell({ ...props, isItemLoaded })}
                </Grid>
              )}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </Box>
  );
}
