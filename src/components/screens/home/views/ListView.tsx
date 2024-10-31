import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import Carousel from "@/components/custom/Carousel";
import { routes } from "@/constants/routes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Grid2,
  Link,
  Typography,
} from "@mui/material";
const ListView = ({
  restaurants,
}: {
  restaurants: GetRestaurantsResponse[];
}) => {
  return (
    <Grid2 container justifyContent="center" spacing={2}>
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
              <Carousel>
                {restaurant.images.map((image, j) => (
                  <CardMedia
                    sx={{
                      height: 190,
                    }}
                    key={`${restaurant.name}-${i}-${j}`}
                    image={image}
                    title={`${restaurant.name}-${i}-${j}`}
                  />
                ))}
              </Carousel>

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
