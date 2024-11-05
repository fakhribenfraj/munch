import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import { routes } from "@/constants/routes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Card, CardContent, Grid2, Link, Skeleton, Typography } from "@mui/material";
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
          bgcolor: "common.white",
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
            //   backgroundColor: "grey.200",
          }}
          elevation={1}
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
              <Typography gutterBottom variant="h6">
                test
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                test
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Grid2>
      {restaurants?.map((restaurant, i) => (
        <Grid2 key={restaurant.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card
            sx={{
              position: "relative",
              //   backgroundColor: "grey.200",
            }}
            elevation={1}
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
                <Typography gutterBottom variant="h6">
                  {restaurant.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {restaurant.address}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ListView;
