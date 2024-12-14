"use client";
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
  Typography,
} from "@mui/material";

type PlateCardProps = {
  title: string;
  price: number;
  image: string;
  id: string;
  rating: number;
};

const PlateCard = ({ image, price, title, id, rating }: PlateCardProps) => {
  return (
    <Card sx={{ position: "relative" }}>
      {/* Food Image */}
      <CardMedia
        component="img"
        height="140"
        image={`${image}?w=200&h=140&fit=crop&auto=format`}
        alt={title}
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
      <Link href={`${routes.PLATES}/${id}`}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            {title}
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <StarIcon fontSize="small" color="warning" />
            <Typography variant="body2" color="text.secondary" ml={0.5}>
              {rating}
            </Typography>
          </Box>
          <Typography variant="body2" color="primary" mt={1} fontWeight="bold">
            {price} DT
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PlateCard;
