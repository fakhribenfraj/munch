import ButtonModal from "@/components/common/buttons/ButtonModal";
import RestaurantNavTabs from "@/components/custom/restaurant/RestaurantNavTabs";
import AddReviewForm from "@/components/forms/restaurant/reviews/AddReviewForm";
import {
  Avatar,
  Box,
  DialogContent,
  Divider,
  Grid2,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

// Mock data
const restaurantData = {
  id: 1,
  name: "Gourmet Delights",
  description: "An exquisite place for food lovers.",
  address: "123 Foodie Lane, Taste Town, TX",
  rating: 4.5,
  totalReviews: 125,
  reviews: [
    {
      id: 1,
      name: "John Doe",
      avatar: "/avatar1.jpg",
      rating: 5,
      text: "Amazing food and great atmosphere!",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/avatar2.jpg",
      rating: 4,
      text: "Loved the desserts! Will visit again.",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "John Doe",
      avatar: "/avatar1.jpg",
      rating: 5,
      text: "Amazing food and great atmosphere!",
      date: "2 days ago",
    },
    {
      id: 4,
      name: "Jane Smith",
      avatar: "/avatar2.jpg",
      rating: 4,
      text: "Loved the desserts! Will visit again.",
      date: "1 week ago",
    },
    {
      id: 11,
      name: "John Doe",
      avatar: "/avatar1.jpg",
      rating: 5,
      text: "Amazing food and great atmosphere!",
      date: "2 days ago",
    },
    {
      id: 12,
      name: "Jane Smith",
      avatar: "/avatar2.jpg",
      rating: 4,
      text: "Loved the desserts! Will visit again.",
      date: "1 week ago",
    },
    {
      id: 13,
      name: "John Doe",
      avatar: "/avatar1.jpg",
      rating: 5,
      text: "Amazing food and great atmosphere!",
      date: "2 days ago",
    },
    {
      id: 14,
      name: "Jane Smith",
      avatar: "/avatar2.jpg",
      rating: 4,
      text: "Loved the desserts! Will visit again.",
      date: "1 week ago",
    },
  ],
};

const RestaurantReviews = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <Stack spacing={2}>
      <RestaurantNavTabs id={id} active="reviews" />
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack spacing={2}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Grid2
                container
                direction={{ xs: "row", sm: "row-reverse", md: "row" }}
              >
                <Grid2 size={{ xs: 12, sm: 4, md: 12 }}>
                  <Stack spacing={1} mb={2} alignItems="center">
                    <Typography variant="h3">4.25</Typography>
                    <Rating
                      value={4.25}
                      size="medium"
                      precision={0.25}
                      readOnly
                    />
                    <Typography component="span" variant="body2">
                      1210 reviews
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 8, md: 12 }}>
                  <Stack spacing={2}>
                    {[
                      { name: "taste", rate: 4, number: 221 },
                      { name: "service", rate: 5, number: 568 },
                      { name: "vibe", rate: 3, number: 421 },
                    ].map((section) => (
                      <Grid2
                        key={section.name}
                        container
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid2 size={3}>{section.name}</Grid2>
                        <Grid2 size={7}>
                          <LinearProgress
                            variant="determinate"
                            value={(section.rate / 5) * 100}
                          />
                        </Grid2>
                        <Grid2 size={2}>
                          <Typography fontSize={12}>
                            {section.number}
                          </Typography>
                        </Grid2>
                      </Grid2>
                    ))}
                  </Stack>
                </Grid2>
                <Grid2
                  size={12}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    mt: 6,
                    justifyContent: "center",
                  }}
                >
                  <ButtonModal
                    label="write review"
                    buttonProps={{
                      variant: "soft",
                      color: "primary",
                      fullWidth: true,
                      sx: { maxWidth: "20rem" },
                    }}
                  >
                    <DialogContent>
                      <Box
                        sx={{
                          p: 4,
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          Add Your Review
                        </Typography>
                        <AddReviewForm />
                      </Box>
                    </DialogContent>
                  </ButtonModal>
                </Grid2>
              </Grid2>
            </Paper>
            <Paper
              elevation={2}
              sx={{ p: 3, display: { xs: "none", md: "block" } }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Add Your Review
              </Typography>
              <AddReviewForm />
            </Paper>
          </Stack>
        </Grid2>

        {/* Reviews Section */}
        <Grid2 size={{ xs: 12, md: 7, lg: 8 }}>
          <List>
            {restaurantData.reviews.map((review) => (
              <React.Fragment key={review.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={review.name} src={review.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box display="flex" alignItems="center">
                        <Typography fontWeight="bold">{review.name}</Typography>
                        <Rating
                          value={review.rating}
                          readOnly
                          size="small"
                          sx={{ ml: 1 }}
                        />
                      </Box>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {review.date}
                        </Typography>
                        <Typography variant="body1">{review.text}</Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>

          {/* Add Review Form */}
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default RestaurantReviews;
