"use client";
import {
  getRestaurants,
  GetRestaurantsResponse,
} from "@/actions/restaurants/getRestaurants";
import { Grid2, Stack, useScrollTrigger } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import ViewChangeButton from "@/app/[locale]/(app)/(home)/ViewChangeButton";
import dynamic from "next/dynamic";
import MainContainer from "../../common/surfaces/MainContainer";
import { useFilterStore } from "@/providers/filter-store-provider";
import useMyLocation from "@/hooks/common/useMyLocation";
import RestaurantCard from "@/components/custom/restaurant/RestaurantCard";
import { useState } from "react";
import MapView from "./views/MapView";
import useRestaurants from "@/hooks/custom/useRestaurants";

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
  const [isMapView, setIsMapView] = useState(false);

  const { data, isLoading } = useRestaurants();
  return (
    <>
      <ResponsiveAppBar isSearching={isLoading} />
      {isMapView ? (
        <MainContainer
          fullHeight
          sx={{
            pt: { xs: 14, sm: 16 },
            px: { xs: 0 },
          }}
        >
          <MapView restaurants={data?.pages.flatMap((page) => page) ?? []} />{" "}
        </MainContainer>
      ) : (
        <ListView />
      )}
      <ViewChangeButton
        isMapView={isMapView}
        sx={{ bottom: { xs: 64, md: 0 } }}
        onClick={() => setIsMapView((state) => !state)}
      />
      <Stack
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: "fab",
          transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1)",
          // transform: `translateY(${trigger ? "100%" : 0})`,
        }}
      >
        <FixedBottomNavigation activeTab="explore" />
      </Stack>
    </>
  );
};
export default HomeScreen;
