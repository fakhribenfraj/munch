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
  Stack,
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
    <Card sx={{ position: "relative", borderRadius: 1, boxShadow: "none" }}>
      <Link href={`${routes.PLATES}/${id}`}>
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
        <CardContent sx={{ padding: 1, "&:last-child": { paddingBottom: 1 } }}>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            {title}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mt={1}
          >
            <Box display="flex" alignItems="center">
              <StarIcon fontSize="small" color="warning" />
              <Typography variant="body2" color="text.secondary" ml={0.5}>
                {rating}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="primary"
              sx={{ fontSize: 16 }}
              fontWeight="bold"
            >
              {price}.00 DT
            </Typography>
          </Stack>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PlateCard;
