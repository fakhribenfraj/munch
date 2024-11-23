import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import NavTabs from "@/components/common/navigation/NavTabs";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { headers } from "next/headers";
import { getSubpages } from "./layout";
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
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },

    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
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
      <Box
        sx={{
          width: { md: "25rem" },
        }}
      >
        <NavTabs
          textColor="primary"
          links={getSubpages(id)}
          active={0}
          variant="fullWidth"
        />
      </Box>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <ImageList
          variant="quilted"
          cols={4}
          sx={{
            flex: 1,
            maxWidth: rowHeight * 4,
            margin: "auto",
            borderRadius: 1,
          }}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, rowHeight, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Stack spacing={2} sx={{ flex: 1 }}>
          <Typography variant="body1">{restaurant.description}</Typography>
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
      </Stack>
    </Stack>
  );
}
