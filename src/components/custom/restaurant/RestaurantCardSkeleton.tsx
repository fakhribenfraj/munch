import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const RestaurantCardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton
        height={190}
        sx={{
          borderRadius: 1,
        }}
      />
      <Skeleton height={16} width={100} />
      <Skeleton height={14} width={300} />
    </Stack>
  );
};

export default RestaurantCardSkeleton;
