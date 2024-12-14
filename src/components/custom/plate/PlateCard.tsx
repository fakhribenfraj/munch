"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Divider,
  Grid,
  Rating,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReviewsList from "../restaurant/ReviewsList";
import { TransitionProps } from "@mui/material/transitions";
import DialogSlide from "@/components/common/surfaces/DialogSlide";

type PlateCardProps = {
  title: string;
  price: number;
  img: string;
};
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const mealData = {
  name: "Classic Cheeseburger",
  price: 12.99,
  rating: 4.5,
  images: ["/images/meal1.jpg", "/images/meal2.jpg"],
  ingredients: [
    "Beef Patty",
    "Cheddar Cheese",
    "Lettuce",
    "Tomato",
    "Pickles",
    "Sesame Bun",
  ],
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

const PlateCard = ({ img, price, title }: PlateCardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card onClick={() => setOpen(true)}>
        <CardMedia component="img" {...srcset(img, 140)} />
        <CardContent>
          <Stack>
            <Typography>{title}</Typography>
            <Typography>{price} TND</Typography>
          </Stack>
        </CardContent>
      </Card>
      <DialogSlide open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mb={2}>
            {mealData.images.map((image, index) => (
              <Grid item xs={6} key={index}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Meal image ${index + 1}`}
                  sx={{
                    borderRadius: 2,
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Details Section */}
          <Box mb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Price: ${mealData.price.toFixed(2)}
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Rating value={mealData.rating} precision={0.5} readOnly />
              <Typography variant="body2" color="text.secondary" ml={1}>
                ({mealData.rating} stars)
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Ingredients Section */}
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Ingredients
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {mealData.ingredients.join(", ")}
            </Typography>
          </Box>
          <ReviewsList reviews={mealData.reviews} />
        </DialogContent>
      </DialogSlide>
    </>
  );
};

export default PlateCard;
