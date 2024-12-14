import ShowMore from "@/components/common/ShowMore";
import { routes } from "@/constants/routes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

interface FoodCategoryProps {
  category: {
    title: string;
    items: any[];
  };
}

const FoodCategory = ({ category }: FoodCategoryProps) => {
  return (
    <Stack spacing={2}>
      {/* Category Title */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {category.title}
      </Typography>

      {/* Food Items Grid */}
      <ShowMore slidesToShow={{ xs: 2, sm: 3, md: 5 }} align="left">
        {category.items.map((item, idx) => (
          <Box key={idx} p={1}>
            <Card sx={{ position: "relative" }}>
              {/* Food Image */}
              <CardMedia
                component="img"
                height="140"
                image={`${item.image}?w=200&h=140&fit=crop&auto=format`}
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
              <Link href={`${routes.PLATES}/${item.id}`}>
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
              </Link>
            </Card>
          </Box>
        ))}
      </ShowMore>
    </Stack>
  );
};

export default FoodCategory;
