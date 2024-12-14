"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback } from "react";

import {
  getRestaurants,
  GetRestaurantsResponse,
} from "@/actions/restaurants/getRestaurants";
import InfiniteVirtualList from "@/components/common/data-display/InfiniteVirtualList";
import { routes } from "@/constants/routes";
import useResponsive from "@/hooks/useResponsive";
import RestaurantCard from "@/components/custom/restaurant/RestaurantCard";

export default function ListView() {
  const itemsPerRow = useResponsive(
    {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
    1
  );

  const renderCell = useCallback((restaurant: GetRestaurantsResponse) => {
    return <RestaurantCard restaurant={restaurant} />;
  }, []);

  return (
    <InfiniteVirtualList
      fetchItems={getRestaurants}
      itemComponent={renderCell}
      itemsPerRow={itemsPerRow}
      itemHeight={310}
      padding={16}
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
