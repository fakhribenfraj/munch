import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import { routes } from "@/constants/routes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Card,
  CardContent,
  Grid2,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import dynamic from "next/dynamic";
const RestaurantMediaCarousel = dynamic(
  () => import("@/components/custom/restaurant/RestaurantMediaCarousel"),
  {
    loading: () => (
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={190}
        sx={{
          bgcolor: "grey.300",
        }}
      />
    ),
  }
);

const ListView = ({
  restaurants,
}: {
  restaurants: GetRestaurantsResponse[];
}) => {
  return (
    <Grid2 container justifyContent="center" spacing={2}>
      <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Card
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 1,
              padding: 1,
              color: "common.white",
            }}
          >
            <FavoriteBorderIcon />
          </Box>
          <Link href={`${routes.RESTAURANTS}/101`}>
            <RestaurantMediaCarousel id="101" />
            <CardContent>
              <Stack spacing={1}>
                <Typography component="span" variant="h6">
                  hijon
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ color: "text.secondary" }}
                >
                  <LocationOnIcon />
                  <Typography variant="subtitle2">hay cheker</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Link>
        </Card>
      </Grid2>
      {restaurants?.map((restaurant, i) => (
        <Grid2 key={restaurant.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 1,
                padding: 1,
                color: "common.white",
              }}
            >
              <FavoriteBorderIcon />
            </Box>
            <Link href={`${routes.RESTAURANTS}/${restaurant.id}`}>
              <RestaurantMediaCarousel id={restaurant.id} />
              <CardContent>
                <Stack spacing={1}>
                  <Typography component="span" variant="h6">
                    {restaurant.name}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ color: "text.secondary" }}
                  >
                    <LocationOnIcon />
                    <Typography variant="subtitle2">
                      {restaurant.delegation}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Link>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ListView;
