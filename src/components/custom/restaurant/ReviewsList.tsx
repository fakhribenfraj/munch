import { Review } from "@/actions/restaurants/getRestaurantReviewsById";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
type ReviewsListProps = {
  reviews: Review[];
};
const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return (
    <List>
      {reviews.map((review) => (
        <React.Fragment key={review.id}>
          <ListItem
            alignItems="flex-start"
            disableGutters
            sx={{ flexDirection: "column", gap: 1 }}
          >
            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              width="100%"
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar alt={review.name} src={review.avatar} />
                <Stack>
                  <Typography fontWeight="bold">{review.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {review.date}
                  </Typography>
                </Stack>
              </Stack>
              <Rating
                value={review.score}
                readOnly
                size="small"
                sx={{ ml: 1 }}
              />
            </Stack>
            <Typography variant="body1" fontWeight={300}>
              {review.text}
            </Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ReviewsList;
