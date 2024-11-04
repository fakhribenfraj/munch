import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: restaurant } = await getRestaurantById(params.id);
  return (
    <SubPageLayout disableTopGutter buttonVariant="contained">
      <Stack alignItems="flex-start" gap={1}>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100vw", md: "100%" },
            height: {
              xs: "calc(100vw / 3)",
              sm: "calc(100vw / 4)",
              lg: "calc(100vw / 5)",
            },
            mb: { xs: 3, md: 6 },
            transform: {
              xs: `translate(-1rem,0)`,
              sm: `translate(-1.5rem,0)`,
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
              boxShadow: 2,
              width: { xs: 48, md: 80 },
              height: { xs: 48, md: 80 },
            }}
          >
            <Image src={restaurant.logo} fill alt="logo" />
          </Box>
        </Box>
        <Typography variant="h4">{restaurant?.name}</Typography>
        <Button variant="outlined">add to favorite</Button>
      </Stack>
      <Stack gap={2}>
        <Tabs
          value="Overview"
          indicatorColor="primary"
          textColor="primary"
          sx={{
            pt: 2,
            backgroundColor: "grey.200",
          }}
        >
          {["Overview", "Menu", "Reviews", "Contact"].map((tab) => (
            <Tab label={tab} key={tab} value={tab} />
          ))}
        </Tabs>
        {/* <Carousel height={280} width={400}>
          {restaurant?.images.map((image, j) => (
            <Box key={`${restaurant.id}-${j}`}>
              <img src={image} alt={`${restaurant.name}-${j}`} />
            </Box>
          ))}
        </Carousel> */}
        {[
          "description",
          "delegation",
          "address",
          "postal_code",
          "phone",
          "email",
          "website",
        ].map((item) => (
          <Stack alignItems="flex-start" gap={1} key={"data-" + item}>
            <Typography variant="h6">{item}:</Typography>
            {/* @ts-ignore */}
            <Typography variant="body1">{restaurant[item]}</Typography>
          </Stack>
        ))}
        <Map
          initialViewState={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            zoom: 7,
          }}
          style={{
            width: "80%",
            height: "20rem",
            margin: "auto",
          }}
        >
          <Marker longitude={restaurant.lng} latitude={restaurant.lat}>
            <LocalPizzaIcon />
          </Marker>
        </Map>
      </Stack>
    </SubPageLayout>
  );
}
