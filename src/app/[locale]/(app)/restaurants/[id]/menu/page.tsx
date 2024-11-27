import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import MealCard from "@/components/custom/restaurant/MealCard";
import RestaurantNavTabs from "@/components/custom/restaurant/RestaurantNavTabs";
import Searchbar from "@/components/filters/Searchbar";
import {
  Grid2,
  Stack,
  Toolbar
} from "@mui/material";

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
      price: 25,
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      price: 29,
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      price: 13,
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      price: 2.4,
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      price: 53.22,
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      price: 32,
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      price: 42,
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      price: 3,
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      price: 25,
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      price: 29,
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      price: 13,
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      price: 2.4,
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      price: 53.22,
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      price: 32,
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      price: 42,
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      price: 3,
      title: "Coffee",
    },
  ];

  return (
    <Stack spacing={1}>
      <RestaurantNavTabs id={id} active="menu" hideBorder />
      <Toolbar
        sx={{
          position: { xs: "sticky", md: "static" },
          top: { xs: "5.8rem", md: "6.7rem" },
          bgcolor: "grey.200",
          zIndex: 1,
          transform: "scaleX(1.01)",
          borderBottom: "1px solid ",
          borderColor: "divider",
        }}
      >
        <Searchbar />
      </Toolbar>
      <Grid2 container spacing={2} mt={2}>
        {itemData.map((item, index) => (
          <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={item.title + index}>
            <MealCard {...item} />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
}
