import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import Carousel from "@/components/custom/Carousel";
import RestaurantNavTabs from "@/components/custom/restaurant/RestaurantNavTabs";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import {
  Box,
  Grid2,
  ImageList,
  ImageListItem,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

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
      rows: 2,
      cols: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      rows: 2,
      cols: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      rows: 2,
      cols: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      rows: 2,
      cols: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      rows: 2,
      cols: 4,
    },

    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      rows: 2,
      cols: 4,
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
  const rowHeight = 128;
  return (
    <Stack spacing={2} sx={{ pb: 4 }}>
      <RestaurantNavTabs id={id} active="overview" />
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Carousel>
            {itemData.map((item) => (
              <Box
                key={item.title}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 4,
                }}
              >
                <Image
                  width={400}
                  height={200}
                  src={`${item.img}?w=${400}&h=${200}&fit=crop&auto=format`}
                  alt={item.title}
                />
              </Box>
            ))}
          </Carousel>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Stack spacing={2} sx={{ flex: 1 }}>
            <Typography variant="body1">{restaurant.description}</Typography>
            <Typography variant="body1">
              visit website:
              <Link href={`https://${restaurant.website}`} target="_blank">
                {restaurant.website}
              </Link>
            </Typography>
            <Box
              sx={{
                borderRadius: 1,
                border: "2px solid",
                borderColor: "grey.300",
                margin: "auto",
                overflow: "hidden",
              }}
            >
              <Map
                initialViewState={{
                  latitude: restaurant.lat,
                  longitude: restaurant.lng,
                  zoom: 7,
                }}
                style={{
                  width: "20rem",
                  height: "20rem",
                }}
              >
                <Marker longitude={restaurant.lng} latitude={restaurant.lat}>
                  <LocalPizzaIcon />
                </Marker>
              </Map>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>
    </Stack>
  );
}
