import { getRestaurantReviewsById } from "@/actions/restaurants/getRestaurantReviewsById";
import AddReviewActionButton from "@/components/custom/action-buttons/AddReviewActionButton";
import RestaurantNavTabs from "@/components/custom/restaurant/RestaurantNavTabs";

import {
  Box,
  Divider,
  Grid2,
  LinearProgress,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
const AddReviewForm = dynamic(
  () => import("@/components/forms/restaurant/reviews/AddReviewForm")
);
const ReviewsList = dynamic(
  () => import("@/components/custom/restaurant/ReviewsList")
);

const RestaurantReviews = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: restaurantReviews } = await getRestaurantReviewsById(id);
  return (
    <Stack spacing={2} position="relative">
      <RestaurantNavTabs id={id} active="reviews" />
      <Grid2 container spacing={4}>
        {/* Rating */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack spacing={4}>
            <Box>
              <Grid2
                container
                direction={{ xs: "row", sm: "row-reverse", md: "row" }}
              >
                <Grid2 size={{ xs: 12, sm: 4, md: 12 }}>
                  <Stack spacing={1} mb={2} alignItems="center">
                    <Typography variant="h3">
                      {restaurantReviews.rating.score}
                    </Typography>
                    <Rating
                      value={restaurantReviews.rating.score}
                      size="medium"
                      precision={0.25}
                      readOnly
                    />
                    <Typography component="span" variant="body2">
                      {restaurantReviews.rating.count} reviews
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 8, md: 12 }}>
                  <Stack spacing={2}>
                    {restaurantReviews.ratings.map((section) => (
                      <Grid2
                        key={section.label}
                        container
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid2 size={3}>{section.label}</Grid2>
                        <Grid2 size={7}>
                          <LinearProgress
                            variant="determinate"
                            value={(section.rating.score / 5) * 100}
                          />
                        </Grid2>
                        <Grid2 size={2}>
                          <Typography fontSize={12}>
                            {section.rating.count}
                          </Typography>
                        </Grid2>
                      </Grid2>
                    ))}
                  </Stack>
                </Grid2>
              </Grid2>
            </Box>
            <Divider />
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Add Your Review
              </Typography>
              <AddReviewForm />
            </Box>
          </Stack>
        </Grid2>

        {/* Reviews */}
        <Grid2 size={{ xs: 12, md: 7, lg: 8 }}>
          <Stack spacing={2}>
            <Typography variant="h6" fontWeight="bold">
              Reviews
            </Typography>
            <ReviewsList reviews={restaurantReviews.reviews} />
          </Stack>
        </Grid2>
      </Grid2>
      <AddReviewActionButton label="write review" />
    </Stack>
  );
};

export default RestaurantReviews;
