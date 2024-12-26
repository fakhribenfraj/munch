import React, { useEffect, useMemo } from "react";

import RestaurantCard from "@/components/custom/restaurant/RestaurantCard";
import useResponsive from "@/hooks/common/useResponsive";
import useRestaurants from "@/hooks/custom/useRestaurants";
import { Box, CircularProgress, Grid2 } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import MainContainer from "../surfaces/MainContainer";
import RestaurantCardSkeleton from "@/components/custom/restaurant/RestaurantCardSkeleton";

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
  console.log(isFetching, isFetchingNextPage);
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
  const virtualItems = rowVirtualizer.getVirtualItems();
  useEffect(() => {
    const [lastItem] = [...virtualItems].reverse();

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
    virtualItems,
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
        <Grid2 container spacing={2}>
          {new Array(20).fill(0).map((_, i) => (
            <Grid2
              key={`resto-skeleton-${i}`}
              size={{ xs: 12, md: 6, lg: 4, xl: 3 }}
            >
              <RestaurantCardSkeleton />
            </Grid2>
          ))}
        </Grid2>
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
            {virtualItems.map((virtualRow) => {
              const rowIndex = virtualRow.index;

              const rowItems = Array.from({ length: itemsPerRow }).map(
                (_, columnIndex) => {
                  const index = rowIndex * itemsPerRow + columnIndex;
                  if (index >= allRows.length) {
                    return (
                      <RestaurantCardSkeleton key={`resto-skeleton-${index}`} />
                    );
                  }
                  const restaurant = allRows[index];
                  return (
                    <Grid2 size={12 / itemsPerRow} key={index}>
                      <RestaurantCard restaurant={restaurant} />
                    </Grid2>
                  );
                }
              );

              return (
                <Box
                  key={virtualRow.key}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <Grid2 container spacing={2}>
                    {rowItems}
                  </Grid2>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </MainContainer>
  );
}
