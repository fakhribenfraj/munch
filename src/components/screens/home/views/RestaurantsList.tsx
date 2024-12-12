"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography
} from "@mui/material";
import { useCallback } from "react";

import {
  getRestaurants,
  GetRestaurantsResponse,
} from "@/actions/restaurants/getRestaurants";
import InfiniteVirtualList from "@/components/common/data-display/InfiniteVirtualList";

export default function RestaurantGrid() {
  const renderCell = useCallback((restaurant: GetRestaurantsResponse) => {
    return (
      <Card>
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
  }, []);

  return (
    <InfiniteVirtualList
      fetchItems={getRestaurants}
      itemComponent={renderCell}
      loadingComponent={
        <Card>
          <Skeleton
            variant="rectangular"
            height={190}
            sx={{ bgcolor: "grey.300" }}
          />
          <CardContent>
            <Stack spacing={2}>
              <Skeleton
                variant="rectangular"
                height={10}
                width={100}
                sx={{ bgcolor: "grey.300", borderRadius: 4 }}
              />
              <Skeleton
                variant="rectangular"
                height={10}
                width={50}
                sx={{ bgcolor: "grey.300", borderRadius: 4 }}
              />
            </Stack>
          </CardContent>
        </Card>
      }
    />
  );
}
