"use client";
import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React from "react";

const AddReviewForm = () => {
  return (
    <Box component="form">
      <Rating precision={0.5} sx={{ mt: 2 }} />
      <TextField
        fullWidth
        margin="normal"
        label="Your Review"
        name="text"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Submit Review
      </Button>
    </Box>
  );
};

export default AddReviewForm;
