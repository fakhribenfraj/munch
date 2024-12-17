import ShowMore from "@/components/common/ShowMore";
import AddReviewActionButton from "@/components/custom/action-buttons/AddReviewActionButton";
import PlateCard from "@/components/custom/plate/PlateCard";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import { routes } from "@/constants/routes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const PlatePage = () => {
  const id = 84;
  const img =
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=140&fit=crop&auto=format";
  return (
    <SubPageLayout
      buttonVariant="contained"
      disablePadding
      returnVariant="absolute"
      possiblePrevLinks={[
        `${routes.RESTAURANTS}/${id}/menu`,
        `${routes.WISHLIST}/plates`,
      ]}
    >
      <Box
        sx={{
          maxWidth: 480,
          margin: "0 auto",
          backgroundColor: "#fff",
          pb: 8,
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
          <Divider sx={{ my: 5 }} />
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
                  price: 15.0,
                  image: img,
                },
                {
                  title: "Pho Noodles",
                  price: 20.0,
                  image: img,
                },
                {
                  title: "Ramen Noodles",
                  price: 15.0,
                  image: img,
                },
                {
                  title: "Pho Noodles",
                  price: 20.0,
                  image: img,
                },
                {
                  title: "Ramen Noodles",
                  price: 15.0,
                  image: img,
                },
                {
                  title: "Pho Noodles",
                  price: 20.0,
                  image: img,
                },
              ].map((dish, index) => (
                <Box key={index} p={1}>
                  <PlateCard
                    id={index.toString()}
                    title={dish.title}
                    image={dish.image}
                    price={dish.price}
                    rating={4.9}
                  />
                </Box>
              ))}
            </ShowMore>
          </Stack>
          {/* Add Review Button */}
        </Stack>
      </Box>
      <AddReviewActionButton label="write review" />
    </SubPageLayout>
  );
};

export default PlatePage;
