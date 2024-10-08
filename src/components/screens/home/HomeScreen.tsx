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
import ResponsiveAppBar from "../../common/ResponsiveAppBar";
import MainContainer from "../../common/surfaces/MainContainer";
import FixedBottomNavigation from "../../common/navigation/FixedBottomNavigation";
import MapView from "./views/MapView";
import ListView from "./views/ListView";

const HomeScreen = ({
  restaurants,
}: {
  restaurants: GetRestaurantsResponse[];
}) => {
  const [isMapView, setisMapView] = useState<boolean>(false);

  return (
    <>
      <ResponsiveAppBar />
      <MainContainer sx={isMapView ? { pb: 0, px: 0 } : undefined}>
        {isMapView ? (
          <MapView restaurants={restaurants} />
        ) : (
          <ListView restaurants={restaurants} />
        )}
      </MainContainer>
      <FixedBottomNavigation
        showMapLink={!isMapView}
        onChangeView={() => {
          setisMapView((state) => !state);
        }}
      />
    </>
  );
};
export default HomeScreen;
