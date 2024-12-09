"use client";
import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import { Box, Stack, useScrollTrigger } from "@mui/material";

import SwitchViewButton from "@/components/custom/SwitchViewButton";
import dynamic from "next/dynamic";
import MainContainer from "../../common/surfaces/MainContainer";

const ListView = dynamic(() => import("./views/ListView"));
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
      <MainContainer
        sx={{
          pt: { xs: 15, sm: 17 },
        }}
      >
        <ListView restaurants={restaurants} />
      </MainContainer>
      <Stack
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1)",
          transform: `translateY(${trigger ? "100%" : 0})`,
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <SwitchViewButton variant="map" />
        </Box>
        <FixedBottomNavigation />
      </Stack>
    </>
  );
};
export default HomeScreen;
