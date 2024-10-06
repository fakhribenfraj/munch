import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import Carousel from "@/components/common/Carousel";
import HideOnScroll from "@/components/common/navigation/HideOnScroll";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: restaurant } = await getRestaurantById(params.id);
  return (
    <Stack>
      <Stack alignItems="flex-start" gap={1}>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100vw", md: "100%" },
            height: { xs: "5rem", md: "8rem" },
            mb: 2,
            transform: {
              xs: `translate(-1rem,-1rem)`,
              sm: `translate(-1.5rem,-1.5rem)`,
              md: "none",
            },
          }}
        >
          <Image src={restaurant.cover} fill alt="cover" />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              transform: "translate(1.5rem,50%)",
            }}
          >
            <Image src={restaurant.logo} width={48} height={48} alt="logo" />
          </Box>
        </Box>
        <Typography variant="h4">{restaurant?.name}</Typography>
        <Button variant="outlined">add to favorite</Button>
      </Stack>
      <Stack gap={2}>
        <Tabs
          value="Overview"
          aria-label="basic tabs example"
          indicatorColor="primary"
          textColor="primary"
          sx={{
            position: "sticky",
            pt: 2,
            top: 0,
            backgroundColor: "grey.200",
            zIndex: 1,
          }}
        >
          {["Overview", "Menu", "Reviews", "Contact"].map((tab) => (
            <Tab label={tab} key={tab} value={tab} />
          ))}
        </Tabs>
        <Carousel height={280} width={400}>
          {restaurant?.images.map((image, j) => (
            <Box key={`${restaurant.id}-${j}`}>
              <img src={image} alt={`${restaurant.name}-${j}`} />
            </Box>
          ))}
        </Carousel>
        {[
          "description",
          "delegation",
          "address",
          "phone",
          "email",
          "website",
        ].map((item) => (
          <Stack alignItems="flex-start" gap={1}>
            <Typography variant="h6">{item}:</Typography>
            {/* @ts-ignore */}
            <Typography variant="body1">{restaurant[item]}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
