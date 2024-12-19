import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import { routes } from "@/constants/routes";
import { Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { default as Carousel, default as CarouselDefault } from "../../common/carousels/default";

type RestaurantCardProps = {
  restaurant: GetRestaurantsResponse;
};
const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Stack sx={{ maxHeight: "100%" }}>
      <CarouselDefault
        slidesToShow={1}
        dots={{ offset: -2.5 }}
        sx={{ color: "grey.100" }}
      >
        {restaurant.images.map((image) => (
          <Link href={`${routes.RESTAURANTS}/${restaurant.id}`} key={image}>
            <CardMedia
              component="img"
              height={190}
              image={image ?? null}
              alt={restaurant.name}
              sx={{ objectFit: "cover", borderRadius: 1 }}
            />
          </Link>
        ))}
      </CarouselDefault>
      <Stack sx={{ padding: 1 }}>
        <Link href={`${routes.RESTAURANTS}/${restaurant.id}`} color="inherit">
          <Typography variant="h6">{restaurant.name}</Typography>
        </Link>
        <Typography variant="body2" color="textSecondary">
          {restaurant.email}
        </Typography>
        <Typography variant="body2">{restaurant.address}</Typography>
      </Stack>
    </Stack>
  );
};

export default RestaurantCard;
