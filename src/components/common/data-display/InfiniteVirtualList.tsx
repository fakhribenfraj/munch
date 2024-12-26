import React from "react";

import RestaurantCard from "@/components/custom/restaurant/RestaurantCard";
import useResponsive from "@/hooks/common/useResponsive";
import useRestaurants from "@/hooks/custom/useRestaurants";
import { Box, Grid2 } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import MainContainer from "../surfaces/MainContainer";

export default function InfiniteVirtualList() {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useRestaurants();
  const allRows = data ? data.pages.flatMap((d) => d.data) : [];

  const parentRef = React.useRef<HTMLDivElement>(null);

  const itemsPerRow = useResponsive({ xs: 1, md: 2, lg: 3, xl: 4 }, 1);

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(
      (hasNextPage ? allRows.length + 1 : allRows.length) / itemsPerRow
    ),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 280, // Fixed height for all rows
    overscan: 5,
  });

  React.useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

    if (!lastItem) return;
    if (
      (lastItem.index + 1) * itemsPerRow >= allRows.length &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
    itemsPerRow,
  ]);

  return (
    <MainContainer
      fullHeight
      disableGutters
      disablePadding
      sx={{
        pt: { xs: 14, sm: 16 },
        px: { xs: 0 },
        overflow: "hidden",
      }}
    >
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <Box
          ref={parentRef}
          sx={{
            height: "100%",
            width: "100%",
            overflow: "auto",
            px: 2,
          }}
        >
          <Box
            sx={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const rowIndex = virtualRow.index;
              const sx = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualRow.start}px)`,
              };

              const rowItems = Array.from({ length: itemsPerRow }).map(
                (_, columnIndex) => {
                  const index = rowIndex * itemsPerRow + columnIndex;
                  if (index >= allRows.length) {
                    return null;
                  }
                  const restaurant = allRows[index];
                  return (
                    <Grid2 size={12/itemsPerRow} key={index}>
                      <RestaurantCard restaurant={restaurant} />
                    </Grid2>
                  );
                }
              );

              return (
                <Box key={virtualRow.key} sx={sx}>
                  <Grid2 container spacing={2}>
                    {rowItems}
                  </Grid2>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
      <Box>
        {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
      </Box>
    </MainContainer>
  );
}
