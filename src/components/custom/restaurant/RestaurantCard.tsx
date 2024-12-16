import { routes } from "@/constants/routes";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import Carousel from "../Carousel";

type RestaurantCardProps = {
  restaurant: GetRestaurantsResponse;
};
const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Card sx={{ maxHeight: "100%", borderRadius: 1, boxShadow: "none" }}>
      <Carousel slidesToShow={1}>
        {restaurant.images.map((image) => (
          <Link href={`${routes.RESTAURANTS}/${restaurant.id}`} key={image}>
            <CardMedia
              component="img"
              height={190}
              image={image}
              alt={restaurant.name}
            />
          </Link>
        ))}
      </Carousel>
      <CardContent sx={{ padding: 1 }}>
        <Link href={`${routes.RESTAURANTS}/${restaurant.id}`} color="inherit">
          <Typography variant="h6">{restaurant.name}</Typography>
        </Link>
        <Typography variant="body2" color="textSecondary">
          {restaurant.email}
        </Typography>
        <Typography variant="body2">{restaurant.address}</Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
