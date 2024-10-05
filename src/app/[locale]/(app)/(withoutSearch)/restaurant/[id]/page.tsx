import { getRestaurants } from "@/actions/restaurant/getRestaurants";
import Carousel from "@/components/common/Carousel";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";

export default async function Page({ params }: { params: { id: string } }) {
  const { data } = await getRestaurants();
  const restaurant = data && data[0];
  return (
    <Stack gap={2}>
      <Stack alignItems="flex-start" gap={1}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 1,
            border: "1px solid grey",
          }}
        >
          logo
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
        <Carousel height={280}>
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
