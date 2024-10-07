import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";

import { routes } from "@/constants/routes";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Button, Fab, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: restaurant } = await getRestaurantById(params.id);
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2,
          p: 1,
        }}
      >
        <Fab
          href={routes.HOME}
          size="small"
          color="default"
          sx={{
            backgroundColor: "common.white",
            boxShadow: 4,
          }}
        >
          <ArrowBackIosNewIcon />
        </Fab>
      </Box>
      <Stack alignItems="flex-start" gap={1}>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100vw", md: "100%" },
            height: { xs: "6rem", md: "9rem" },
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
        >
          <Marker
            longitude={restaurant.lng}
            latitude={restaurant.lat}
            anchor="bottom"
          >
            <div>{restaurant.name}</div>
          </Marker>
        </Map>
      </Stack>
    </Box>
  );
}
