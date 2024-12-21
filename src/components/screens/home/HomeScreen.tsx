"use client";
import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import { Stack, useScrollTrigger } from "@mui/material";

import ViewChangeButton from "@/app/[locale]/(app)/(home)/ViewChangeButton";
import dynamic from "next/dynamic";
import MainContainer from "../../common/surfaces/MainContainer";

const ListView = dynamic(() => import("./views/ListView"));
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
          pt: { xs: 11.5, sm: 17 },
          px: { xs: 0 },
          overflow: "hidden",
        }}
      >
        <ListView />
      </MainContainer>
      <ViewChangeButton isMapView={false} sx={{ bottom: { xs: 64, md: 0 } }} />
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
