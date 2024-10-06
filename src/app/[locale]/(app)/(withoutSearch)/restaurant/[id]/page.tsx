import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import Carousel from "@/components/common/Carousel";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: restaurant } = await getRestaurantById(params.id);
  return (
    <Stack gap={2}>
      <Stack alignItems="flex-start" gap={1}>
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: { xs: "5rem", md: "8rem" },
            transform: "translate(-1rem,-1rem)",
            mb: 2,
          }}
        >
          <Image src={restaurant.cover} fill alt="cover" />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              transform: "translate(1rem,50%)",
            }}
          >
            <Image src={restaurant.logo} width={48} height={48} alt="logo" />
          </Box>
        </Box>
        <Typography variant="h4">{restaurant?.name}</Typography>
        <Button variant="outlined">add to favorite</Button>
      </Stack>
      <Tabs
        value="Overview"
        aria-label="basic tabs example"
        indicatorColor="primary"
        textColor="primary"
      >
        {["Overview", "Menu", "Reviews", "Contact"].map((tab) => (
          <Tab label={tab} key={tab} value={tab} />
        ))}
      </Tabs>
      <Stack alignItems="flex-start" gap={1}>
        <Typography variant="h6">description:</Typography>
        <Typography variant="body1">{restaurant?.description}</Typography>
      </Stack>
      <Stack alignItems="flex-start" gap={1}>
        <Typography variant="h6">media:</Typography>
        <Carousel height={280} width={400}>
          {restaurant?.images.map((image, j) => (
            <Box key={`${restaurant.id}-${j}`}>
              <img src={image} alt={`${restaurant.name}-${j}`} />
            </Box>
          ))}
        </Carousel>
      </Stack>
    </Stack>
  );
}
