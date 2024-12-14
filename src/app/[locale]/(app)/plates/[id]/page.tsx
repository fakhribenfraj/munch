import React from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Stack,
  DialogContent,
  Divider,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import AddReviewForm from "@/components/forms/restaurant/reviews/AddReviewForm";
import ShowMore from "@/components/common/ShowMore";
import ButtonModal from "@/components/common/buttons/ButtonModal";

const PlatePage = () => {
  const img =
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=140&fit=crop&auto=format";
  return (
    <SubPageLayout buttonVariant="contained" sx={{ px: 0 }} disablePadding>
      <Box
        sx={{
          maxWidth: 480,
          margin: "0 auto",
          backgroundColor: "#fff",
        }}
      >
        {/* Header Section */}
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="Chicken Burger"
            sx={{ borderRadius: { xs: 0, md: 2 } }}
          />
          <FavoriteBorderIcon
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: 0.5,
              fontSize: 28,
              cursor: "pointer",
            }}
          />
        </Box>
        <Stack sx={{ px: 2 }}>
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
              <StarIcon color="warning" fontSize="small" />
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
            A delicious chicken burger served on a toasted bun with fresh
            lettuce, tomato slices, and mayonnaise. Juicy grilled chicken
            patty...
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
          <Divider sx={{ my: 4 }} />
          {/* Similar Dishes */}
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
              Similar dishes
            </Typography>
            <ShowMore
              slidesToShow={{ xs: 2, sm: 3 }}
              align="left"
              autoPlay={2000}
              infinite
            >
              {[
                {
                  title: "Ramen Noodles",
                  price: "15.00 DT",
                  image: img,
                },
                {
                  title: "Pho Noodles",
                  price: "20.00 DT",
                  image: img,
                },
                {
                  title: "Ramen Noodles",
                  price: "15.00 DT",
                  image: img,
                },
                {
                  title: "Pho Noodles",
                  price: "20.00 DT",
                  image: img,
                },
                {
                  title: "Ramen Noodles",
                  price: "15.00 DT",
                  image: img,
                },
                {
                  title: "Pho Noodles",
                  price: "20.00 DT",
                  image: img,
                },
              ].map((dish, index) => (
                <Box key={index} p={1}>
                  <Card sx={{ minWidth: 120, boxShadow: "none" }}>
                    <CardMedia
                      component="img"
                      height="80"
                      image={dish.image}
                      alt={dish.title}
                      sx={{ borderRadius: 1 }}
                    />
                    <CardContent sx={{ padding: 1 }}>
                      <Typography variant="body2" fontWeight="bold">
                        {dish.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {dish.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </ShowMore>
          </Stack>
          {/* Add Review Button */}
          <ButtonModal
            label="write review"
            buttonProps={{
              variant: "contained",
              color: "primary",
              fullWidth: true,
              sx: {
                display: "block",
                maxWidth: "24rem",
                mx: "auto",
                mt: 4,
                mb: 2,
              },
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
        </Stack>
      </Box>
    </SubPageLayout>
  );
};

export default PlatePage;
