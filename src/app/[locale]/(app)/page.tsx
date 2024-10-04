import { getUserProfile } from "@/actions/authorization/getUserProfile";
import HideOnScroll from "@/components/common/navigation/HideOnScroll";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const restaurants = [
    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },
    {
      name: "El Ali",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/11/ef/c3/el-ali.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful restaurant in the middle of Medina. Cheap and elegant. The place to be when visiting Tunis and medina",
    },
    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },
    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },
    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },

    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },
    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },
    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },
    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },
    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },

    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },
    {
      name: "Dar el jeld",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
      description:
        "Beautiful setting. We ordered Tunesian sparkling wine to start. Some other flat wine arrived, which took a long time to replace.",
    },
  ];
  return (
    <Grid container justifyContent="center">
      {restaurants.map((restaurant) => (
        <Grid
          item
          key={restaurant.name}
          sx={{ p: { xs: 1, md: 1.5 } }}
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <Card
            sx={{
              boxShadow: 7,
            }}
          >
            <CardMedia
              sx={{ height: 190 }}
              image={restaurant.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {restaurant.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {restaurant.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default Home;
