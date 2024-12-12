"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback } from "react";

import {
  getRestaurants,
  GetRestaurantsResponse,
} from "@/actions/restaurants/getRestaurants";
import InfiniteVirtualList from "@/components/common/data-display/InfiniteVirtualList";
import { routes } from "@/constants/routes";

export default function RestaurantGrid() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  let itemsPerRow = 1;
  if (isTablet) {
    itemsPerRow = 2;
  } else if (isDesktop) {
    itemsPerRow = 3;
  } else if (isLargeDesktop) {
    itemsPerRow = 4;
  }
  const renderCell = useCallback((restaurant: GetRestaurantsResponse) => {
    return (
      <Card sx={{ maxHeight: "100%" }}>
        <CardMedia
          component="img"
          height={190}
          image={restaurant.images[0]}
          alt={restaurant.name}
        />
        <CardContent>
          <Link href={`${routes.RESTAURANTS}/${restaurant.id}`} color="inherit">
            <Typography variant="h6">{restaurant.name}</Typography>
          </Link>
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
