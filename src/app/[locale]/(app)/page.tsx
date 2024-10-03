import { getUserProfile } from "@/actions/authorization/getUserProfile";
import HideOnScroll from "@/components/common/navigation/HideOnScroll";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const profile = await getUserProfile();
  const restaurants = [
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
    <Stack gap={2}>
      {restaurants.map((restaurant) => (
        <Card key={restaurant.name} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
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
      ))}
    </Stack>
  );
};
export default Home;
