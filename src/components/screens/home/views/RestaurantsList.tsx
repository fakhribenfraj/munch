"use client";

import React, { useState, useCallback, useRef } from "react";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardMedia,
} from "@mui/material";

import {
  getRestaurants,
  GetRestaurantsResponse,
} from "@/actions/restaurants/getRestaurants";

const PAGE_SIZE = 20;

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState<GetRestaurantsResponse[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef<List | null>(null);

  // Cache row heights to avoid recalculating them
  const rowHeights = useRef<{ [key: number]: number }>({});

  const isItemLoaded = (index: number) =>
    !hasMore || index < restaurants.length;

  const loadMoreItems = useCallback(
    async (startIndex: number) => {
      const nextPage = Math.floor(startIndex / PAGE_SIZE) + 1;
      try {
        const res = await getRestaurants();
        setRestaurants((prev) => [...prev, ...res.data]);
        setHasMore(false);
      } catch (error) {
        console.error("Failed to load more items:", error);
      }
    },
    [restaurants]
  );

  const getRowHeight = (index: number) => {
    if (rowHeights.current[index] != null) {
      return rowHeights.current[index];
    }

    // Calculate height dynamically based on content
    const restaurant = restaurants[index];
    const baseHeight = 300; // Minimum height
    const contentHeight = restaurant
      ? Math.ceil(restaurant.address.length / 40) * 20
      : 0;
    const height = baseHeight + contentHeight;

    rowHeights.current[index] = height;
    return height;
  };

  const renderRow = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const GUTTER_SIZE = 16;

    if (!isItemLoaded(index)) {
      return (
        <Box
          style={style}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress size={24} />
        </Box>
      );
    }

    const restaurant = restaurants[index];
    return (
      <Card
        style={{
          ...style,
          top: (style.top as number) + GUTTER_SIZE,
          height: (style.height as number) - GUTTER_SIZE,
        }}
      >
        <CardMedia
          component="img"
          height={190}
          image={restaurant.images[0]}
          alt={restaurant.name}
        />
        <CardContent>
          <Typography variant="h6">{restaurant.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {restaurant.email}
          </Typography>
          <Typography variant="body2">{restaurant.address}</Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={hasMore ? restaurants.length + 1 : restaurants.length}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <List
                height={height}
                width={width}
                itemCount={
                  hasMore ? restaurants.length + 1 : restaurants.length
                }
                itemSize={getRowHeight}
                onItemsRendered={onItemsRendered}
                ref={(instance) => {
                  ref(instance);
                  listRef.current = instance;
                }}
              >
                {renderRow}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </Box>
  );
}
