"use client";

import {
  Box,
  CircularProgress,
  Grid2,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import React, { useMemo, useRef } from "react";

import RestaurantCard from "@/components/custom/restaurant/RestaurantCard";
import useRestaurants from "@/hooks/custom/useRestaurants";
import MainContainer from "../surfaces/MainContainer";

export default function RestaurantGrid() {
  const PAGE_SIZE = 20;
  const parentRef = useRef(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const { data, fetchNextPage, hasNextPage, isFetching } = useRestaurants();

  const restaurants = useMemo(() => {
    return data?.pages.flatMap((page) => page) || [];
  }, [data]);

  const itemsPerRow = isLargeScreen ? 4 : 1;
  const virtualizer = useVirtualizer({
    count: Math.ceil(
      (hasNextPage ? restaurants.length + PAGE_SIZE : restaurants.length) /
        itemsPerRow
    ),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 350, // Fixed height for all rows
    overscan: 5,
  });

  React.useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].slice(-1);
    if (!lastItem) return;

    if (
      lastItem.index * itemsPerRow >= restaurants.length - 1 &&
      hasNextPage &&
      !isFetching
    ) {
      fetchNextPage();
    }
  }, [
    fetchNextPage,
    hasNextPage,
    isFetching,
    restaurants,
    itemsPerRow,
    virtualizer,
  ]);

  return (
    <Box
      ref={parentRef}
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "auto",
        position: "relative",
      }}
    >
      <MainContainer
        fullHeight
        sx={{
          pt: { xs: 14, sm: 16 },
          px: { xs: 0 },
        }}
      >
        <Box
          sx={{
            height: virtualizer.getTotalSize(),
            width: "100%",
            position: "relative",
          }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
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
                if (index >= restaurants.length) {
                  return (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {hasNextPage ? <CircularProgress size={24} /> : null}
                    </Box>
                  );
                }

                const restaurant = restaurants[index];

                return (
                  <Grid2 key={index} size={{ xs: 12, md: 3 }}>
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
      </MainContainer>
    </Box>
  );
}
