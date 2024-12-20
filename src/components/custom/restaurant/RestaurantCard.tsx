import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import Carousel from "@/components/common/carousels/swiper/Carousel";
import { routes } from "@/constants/routes";
import { Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

type RestaurantCardProps = {
  restaurant: GetRestaurantsResponse;
};
const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Stack sx={{ maxHeight: "100%" }}>
      <Carousel pagination={true} sx={{ color: "common.white" }}>
        {restaurant.images.map((image) => (
          <Link href={`${routes.RESTAURANTS}/${restaurant.id}`} key={image.id}>
            <CardMedia
              component="img"
              height={190}
              image={image.url ?? null}
              alt={restaurant.name}
              sx={{ objectFit: "cover", borderRadius: 1 }}
            />
          </Link>
        ))}
      </Carousel>
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
