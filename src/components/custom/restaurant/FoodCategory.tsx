"use client";

import ShowMore from "@/components/common/ShowMore";
import Carousel from "@/components/custom/Carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface FoodCategoryProps {
  category: {
    title: string;
    items: any[];
  };
}

const FoodCategory = ({ category }: FoodCategoryProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Stack mb={4} spacing={2}>
      {/* Category Title */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {category.title}
      </Typography>

      {/* Food Items Grid */}
      <ShowMore slidesToShow={2}>
        {category.items.map((item, idx) => (
          <Box key={idx} p={1}>
            <Card sx={{ position: "relative" }}>
              {/* Food Image */}
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              {/* Favorite Button */}
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  zIndex: 1,
                }}
              >
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>

              {/* Food Info */}
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" noWrap>
                  {item.name}
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                  <StarIcon fontSize="small" color="warning" />
                  <Typography variant="body2" color="text.secondary" ml={0.5}>
                    {item.rating}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="primary"
                  mt={1}
                  fontWeight="bold"
                >
                  {item.price}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </ShowMore>
    </Stack>
  );
};

export default FoodCategory;
