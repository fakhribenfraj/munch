import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import FoodCategory from "@/components/custom/restaurant/FoodCategory";
import RestaurantNavTabs from "@/components/custom/restaurant/RestaurantNavTabs";
import Searchbar from "@/components/filters/Searchbar";
import { Stack, Toolbar } from "@mui/material";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: restaurant } = await getRestaurantById(id);
  const categories = [
    {
      title: "Burger",
      items: [
        {
          name: "Chicken Burger",
          price: "6.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        },
        {
          name: "Beef Burger",
          price: "10.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          name: "Chicken Burger",
          price: "6.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        },
        {
          name: "Beef Burger",
          price: "10.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        },
        {
          name: "Chicken Burger",
          price: "6.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        },
        {
          name: "Beef Burger",
          price: "10.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        },
      ],
    },
    {
      title: "Noodles",
      items: [
        {
          name: "Ramen Noodles",
          price: "15.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          name: "Pho Noodles",
          price: "20.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          name: "Chicken Burger",
          price: "6.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        },
        {
          name: "Beef Burger",
          price: "10.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        },
      ],
    },
    {
      title: "Spaghettis",
      items: [
        {
          name: "Spaghetti Penne",
          price: "12.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          name: "Spaghetti Farfalle",
          price: "25.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
      ],
    },
    {
      title: "5maj",
      items: [
        {
          name: "Fresh Fruit Donuts",
          price: "5.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
          name: "Rotini",
          price: "18.00 DT",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
      ],
    },
  ];
  return (
    <Stack spacing={1}>
      <RestaurantNavTabs id={id} active="menu" hideBorder />
      <Toolbar
        sx={{
          position: { xs: "sticky", md: "static" },
          top: 47,
          bgcolor: "grey.200",
          zIndex: "subBar",
          transform: "scaleX(1.01)",
          borderBottom: "1px solid ",
          borderColor: "divider",
        }}
      >
        <Searchbar />
      </Toolbar>
      <Stack spacing={2}>
        {categories.map((category, index) => (
          <FoodCategory category={category} key={index} />
        ))}
      </Stack>
    </Stack>
  );
}
