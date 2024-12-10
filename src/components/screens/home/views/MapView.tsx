"use client";
import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import { routes } from "@/constants/routes";
import CloseIcon from "@mui/icons-material/Close";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { Box, IconButton, Link, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GeolocateControl, ViewState } from "react-map-gl";

const MapView = ({
  restaurants,
}: {
  restaurants: GetRestaurantsResponse[];
}) => {
  const [viewPort, setViewPort] = useState<Partial<ViewState> | null>(null);

  const [selectedRestaurant, setSelectedRestaurant] =
    useState<GetRestaurantsResponse | null>(null);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const lng = searchParams.get("lng");
    const lat = searchParams.get("lat");
    if (lng && lat) {
      setViewPort({
        zoom: 10,
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
      });
    } else {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos.coords);
        setViewPort({
          zoom: 10,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    }
  }, [searchParams]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
      }}
    >
      {viewPort && (
        <Map
          initialViewState={viewPort}
          onClick={(e) => {
            setSelectedRestaurant(null);
          }}
        >
          <GeolocateControl
            fitBoundsOptions={{ zoom: 13 }}
            positionOptions={{
              enableHighAccuracy: true,
            }}
          />
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
                  zoom: 14,
                });
                const params = new URLSearchParams(searchParams);
                params.set("lng", restaurant.lng.toString());
                params.set("lat", restaurant.lat.toString());
                replace(`${pathname}?${params.toString()}`);

                setSelectedRestaurant(restaurant);
              }}
            >
              <LocalPizzaIcon
                sx={{ fontSize: "3rem" }}
                color={
                  selectedRestaurant?.id == restaurant.id
                    ? "primary"
                    : "inherit"
                }
              />
            </Marker>
          ))}
        </Map>
      )}

      {selectedRestaurant && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: { xs: "50%", md: 0 },
            transform: { xs: "translateX(-50%)", md: "none" },
            width: { xs: "100%", sm: "80%", md: 400 },
            height: { md: "100%" },
            zIndex: 20,
            p: 2,
          }}
        >
          <Paper
            sx={{
              overflow: "hidden",
              height: "100%",
              width: "100%",
            }}
          >
            <Stack
              direction={{ xs: "row", md: "column-reverse" }}
              justifyContent="space-between"
            >
              <Stack direction={{ xs: "row", md: "column" }}>
                <Box
                  sx={{
                    width: { xs: 112, sm: 132, md: "100%" },
                    aspectRatio: { xs: "1/1", md: "2" },
                    position: "relative",
                  }}
                >
                  <Image
                    src={selectedRestaurant.logo}
                    fill
                    alt="logo"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Stack
                  sx={{
                    p: { xs: 1, sm: 2 },
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    variant="h6"
                    href={`${routes.RESTAURANTS}/${selectedRestaurant.id}`}
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
                  alignSelf: { xs: "flex-start", md: "flex-end" },
                }}
                onClick={(e) => {
                  setSelectedRestaurant(null);
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
