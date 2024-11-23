import NavTabs from "@/components/common/navigation/NavTabs";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { getSubpages } from "../layout";

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
  ],
};

const RestaurantReviews = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          width: { md: "25rem" },
          position: "sticky",
          top: { xs: 45, md: 60 },
          zIndex: 1,
          bgcolor: "grey.200",
        }}
      >
        <NavTabs
          textColor="primary"
          links={getSubpages(id)}
          active={2}
          variant="fullWidth"
        />
      </Box>
      <Grid container spacing={4}>
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {restaurantData.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {restaurantData.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {restaurantData.address}
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <Rating value={restaurantData.rating} readOnly precision={0.5} />
              <Typography variant="body2" ml={1}>
                {restaurantData.rating} ({restaurantData.totalReviews} reviews)
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Reviews Section */}
        <Grid item xs={12} md={8}>
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
          {/* <Box mt={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Add Your Review
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Your Name"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
              />
              <Rating
                value={newReview.rating}
                onChange={handleRatingChange}
                precision={0.5}
                sx={{ mt: 2 }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Your Review"
                name="text"
                multiline
                rows={4}
                value={newReview.text}
                onChange={handleInputChange}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Submit Review
              </Button>
            </Box>
          </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default RestaurantReviews;
