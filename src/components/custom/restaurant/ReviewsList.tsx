import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
type ReviewsListProps = {
  reviews: {
    name: string;
    id: string | number;
    date: string;
    text: string;
    avatar: string;
    rating: number;
  }[];
};
const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return (
    <List>
      {reviews.map((review) => (
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
  );
};

export default ReviewsList;
