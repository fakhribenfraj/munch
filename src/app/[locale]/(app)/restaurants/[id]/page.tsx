import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { Stack, Typography } from "@mui/material";
import { headers } from "next/headers";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: restaurant } = await getRestaurantById(id);

  return (
    <Stack gap={2}>
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
  );
}
