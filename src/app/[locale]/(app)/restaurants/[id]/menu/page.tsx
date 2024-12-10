import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import RestaurantNavTabs from "@/components/custom/restaurant/RestaurantNavTabs";
import Searchbar from "@/components/filters/Searchbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

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
      {/* <Grid2 container spacing={2} mt={2}>
        {itemData.map((item, index) => (
          <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={item.title + index}>
            <MealCard {...item} />
          </Grid2>
        ))}
      </Grid2> */}
      <Box sx={{ padding: 2 }}>
        {categories.map((category, index) => (
          <Box key={index} mb={4}>
            {/* Category Title */}
            <Typography variant="h6" fontWeight="bold" mb={2}>
              {category.title}
            </Typography>

            {/* Food Items Grid */}
            <Grid container spacing={2}>
              {category.items.map((item, idx) => (
                <Grid item xs={6} sm={4} md={3} key={idx}>
                  <Card sx={{ position: "relative" }}>
                    {/* Food Image */}
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.name}
                    />
                    {/* Favorite Button */}
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        backgroundColor: "white",
                        zIndex: 1,
                      }}
                    >
                      <FavoriteBorderIcon fontSize="small" />
                    </IconButton>

                    {/* Food Info */}
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold" noWrap>
                        {item.name}
                      </Typography>
                      <Box display="flex" alignItems="center" mt={1}>
                        <StarIcon fontSize="small" color="warning" />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          ml={0.5}
                        >
                          {item.rating}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="primary"
                        mt={1}
                        fontWeight="bold"
                      >
                        {item.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
