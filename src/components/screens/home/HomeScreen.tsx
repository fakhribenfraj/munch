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
import useMyLocation from "@/hooks/useMyLocation";
import RestaurantCard from "@/components/custom/restaurant/RestaurantCard";

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
  const { filters } = useFilterStore((state) => state);
  const position = useMyLocation();
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["restaurants",{ position, params: filters }],
    queryFn: () =>
      getRestaurants(position ? { position, params: filters } : undefined),
  });
  console.log({ data, filters });
  return (
    <>
      <ResponsiveAppBar />
      <MainContainer
        fullHeight
        sx={{
          pt: { xs: 14, sm: 16 },
          px: { xs: 0 },
          // overflow: "hidden",
        }}
      >
        {/* <ListView /> */}
        <Grid2 container spacing={2}>
          {data?.data.map((restaurant) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </Grid2>
          ))}
        </Grid2>
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
          // transform: `translateY(${trigger ? "100%" : 0})`,
        }}
      >
        <FixedBottomNavigation activeTab="explore" />
      </Stack>
    </>
  );
};
export default HomeScreen;
