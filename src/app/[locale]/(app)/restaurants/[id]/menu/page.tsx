import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import NavTabs from "@/components/common/navigation/NavTabs";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Stack,
  Toolbar,
} from "@mui/material";
import { getSubpages } from "../layout";
import Searchbar from "@/components/filters/Searchbar";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: restaurant } = await getRestaurantById(id);
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
  ];
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          width: { md: "25rem" },
          position: "sticky",
          top: { xs: 45, md: 60 },
          zIndex: 1,
          bgcolor: "grey.200",
        }}
      >
        <NavTabs
          textColor="primary"
          links={getSubpages(id)}
          active={1}
          variant="fullWidth"
        />
      </Box>
      <Toolbar
        sx={{
          position: "sticky",
          top: { xs: "5.8rem", md: "7rem" },
          bgcolor: "grey.200",
          zIndex: 1,
        }}
      >
        <Searchbar />
      </Toolbar>
      <Grid2 container spacing={2}>
        {itemData.map((item, index) => (
          <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={item.title + index}>
            <Card>
              <CardMedia component="img" {...srcset(item.img, 140)} />
              <CardContent>{item.title}</CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
}
