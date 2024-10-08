"use client";
import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import { routes } from "@/constants/routes";
import CloseIcon from "@mui/icons-material/Close";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { Box, IconButton, Link, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const MapView = ({
  restaurants,
}: {
  restaurants: GetRestaurantsResponse[];
}) => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<GetRestaurantsResponse | null>(null);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
      }}
    >
      <Map
        initialViewState={{
          latitude: 37.306834,
          longitude: -3.917501,
          zoom: 4,
        }}
        onClick={(e) => {
          setSelectedRestaurant(null);
        }}
      >
        {restaurants?.map((restaurant, i) => (
          <Marker
            key={restaurant.id}
            longitude={restaurant.lng}
            latitude={restaurant.lat}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              e.target._map?.flyTo({
                center: { lat: restaurant.lat, lng: restaurant.lng },
                zoom: 4,
              });
              setSelectedRestaurant(restaurant);
            }}
          >
            <LocalPizzaIcon
              color={
                selectedRestaurant?.id == restaurant.id ? "primary" : "inherit"
              }
            />
          </Marker>
        ))}
      </Map>
      {selectedRestaurant && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            zIndex: 20,
            p: 2,
          }}
        >
          <Paper
            sx={{
              margin: "auto",
              overflow: "hidden",
              width: { xs: "100%", sm: "80%", md: "50%" },
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row">
                <Box
                  sx={{
                    width: { xs: 112, md: 132 },
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image src={selectedRestaurant.logo} fill alt="logo" />
                </Box>
                <Stack
                  sx={{
                    p: { xs: 1, sm: 2 },
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    variant="h6"
                    href={`${routes.RESTAURANT}/${selectedRestaurant.id}`}
                  >
                    {selectedRestaurant.name}
                  </Link>
                  <Stack>
                    <Typography>{selectedRestaurant.phone}</Typography>
                    <Link
                      href={`https://www.${selectedRestaurant.website}`}
                      target="_blank"
                    >
                      {selectedRestaurant.website}
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
              <IconButton
                size="small"
                sx={{
                  justifySelf: "flex-end",
                  alignSelf: "self-start",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          </Paper>
        </Box>
      )}
    </Box>
  );
};
export default MapView;
