"use client";
import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import LocationIcon from "@/components/icons/outlined/Location";
import { routes } from "@/constants/routes";
import useResponsive from "@/hooks/useResponsive";
import useRouterSearchParams from "@/hooks/useRouterSearchParams";
import CloseIcon from "@mui/icons-material/Close";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import {
  Box,
  IconButton,
  Link,
  Paper,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
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
  const { setParam, getParam } = useRouterSearchParams();
  const slideDirection = useResponsive<"left" | "right" | "down" | "up">(
    { md: "right" },
    "up"
  );
  useEffect(() => {
    const lng = getParam("lng");
    const lat = getParam("lat");
    if (lng && lat) {
      setViewPort({
        zoom: 10,
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
      });
    } else {
      navigator.geolocation.getCurrentPosition((pos) => {
        setViewPort({
          zoom: 10,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    }
  }, []);

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
                  zoom: 12,
                });
                setParam("lng", restaurant.lng.toString());
                setParam("lat", restaurant.lat.toString());
                setSelectedRestaurant(restaurant);
              }}
            >
              <LocationIcon
                sx={{
                  fontSize:
                    selectedRestaurant?.id == restaurant.id
                      ? "2.5rem"
                      : "2rem",
                }}
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
      <Slide
        in={!!selectedRestaurant}
        direction={slideDirection}
        mountOnEnter
        unmountOnExit
      >
        <Box
          sx={{
            width: { xs: "100%", md: "auto" },
            height: { md: "100%" },

            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: "appBar",
          }}
        >
          <Box
            sx={{
              mx: "auto",
              mb: { xs: -1, md: 0 },
              ml: { md: -1 },

              width: { xs: "100%", sm: "80%", md: 400 },
              height: { md: "100%" },
            }}
          >
            <Paper
              sx={{
                overflow: "hidden",
                height: "100%",
                width: "100%",
                pb: { xs: 1, md: 0 },
                pl: { md: 1 },
              }}
            >
              {selectedRestaurant && (
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
              )}
            </Paper>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};
export default MapView;
