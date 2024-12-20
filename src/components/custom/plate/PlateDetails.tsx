import StarIconFilled from "@/components/icons/filled/Star";
import { Chip, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const PlateDetails = () => {
  return (
    <Stack>
      {/* Title and Rating */}
      <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 2 }}>
        Chicken Burger
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          marginTop: 0.5,
        }}
      >
        <Typography
          variant="h6"
          color="primary.main"
          sx={{ fontWeight: "bold" }}
        >
          6.00 DT
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <StarIconFilled color="warning" fontSize="small" />
          <Typography variant="body2" color="text.secondary">
            4.9 (1,205)
          </Typography>
        </Box>
      </Box>

      {/* Description */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          marginTop: 1,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        A delicious chicken burger served on a toasted bun with fresh lettuce,
        tomato slices, and mayonnaise. Juicy grilled chicken patty...
      </Typography>

      {/* Ingredients */}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
        Ingredients
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Tomato, basil, mozzarella, olive oil, salt, pepper
      </Typography>

      {/* Tags */}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
        Tags
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        <Chip label="Vegetarian" color="success" />
        <Chip label="Gluten-Free" color="info" />
        <Chip label="Spicy" color="error" />
      </Box>

      {/* Allergy Information */}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
        Allergy Information
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Contains dairy. May contain traces of nuts.
      </Typography>
      <Divider sx={{ my: 5 }} />
    </Stack>
  );
};

export default PlateDetails;
