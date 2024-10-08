import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import Carousel from "@/components/common/Carousel";
import { routes } from "@/constants/routes";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const { data: restaurants } = await getRestaurants();
  return (
    <Grid container justifyContent="center">
      {restaurants?.map((restaurant, i) => (
        <Grid
          item
          key={restaurant.id}
          sx={{ p: { xs: 1, md: 1.5 } }}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
        >
          <Card
            sx={{
              boxShadow: 7,
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
            <Link href={`${routes.RESTAURANT}/${restaurant.id}`}>
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
        </Grid>
      ))}
    </Grid>
  );
};
export default Home;
