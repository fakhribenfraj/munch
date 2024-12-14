"use client";
import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import MapIcon from "@mui/icons-material/Map";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Box, Stack, useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import MainContainer from "../../common/surfaces/MainContainer";
import useRouterSearchParams from "@/hooks/useRouterSearchParams";
import ViewChangeButton from "@/app/[locale]/(app)/(home)/ViewChangeButton";

const MapView = dynamic(() => import("./views/MapView"));
const ListView = dynamic(() => import("./views/ListView"));
const Fab = dynamic(() => import("@mui/material/Fab"));
const ResponsiveAppBar = dynamic(() => import("../../custom/ResponsiveAppBar"));
const FixedBottomNavigation = dynamic(
  () => import("../../common/navigation/FixedBottomNavigation")
);
const HomeScreen = ({
  restaurants,
}: {
  restaurants: GetRestaurantsResponse[];
}) => {
  const trigger = useScrollTrigger();

  return (
    <>
      <ResponsiveAppBar />
      <MainContainer
        fullHeight
        sx={{
          pt: { xs: 15, sm: 17 },
          px: { xs: 0 },
          overflow: "hidden",
        }}
      >
        <ListView />
      </MainContainer>
      <ViewChangeButton isMapView={false} sx={{ bottom: 72 }} />
      <Stack
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: "fab",
          transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1)",
          transform: `translateY(${trigger ? "100%" : 0})`,
        }}
      >
        <FixedBottomNavigation activeTab="explore" />
      </Stack>
    </>
  );
};
export default HomeScreen;
