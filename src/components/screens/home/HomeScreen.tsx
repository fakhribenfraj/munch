"use client";
import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import MapIcon from "@mui/icons-material/Map";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Fab, Stack, useScrollTrigger } from "@mui/material";
import { useState } from "react";
import FixedBottomNavigation from "../../common/navigation/FixedBottomNavigation";
import ResponsiveAppBar from "../../common/ResponsiveAppBar";
import MainContainer from "../../common/surfaces/MainContainer";
import ListView from "./views/ListView";
import MapView from "./views/MapView";

const HomeScreen = ({
  restaurants,
}: {
  restaurants: GetRestaurantsResponse[];
}) => {
  const [isMapView, setisMapView] = useState<boolean>(false);
  const trigger = useScrollTrigger();

  return (
    <>
      <ResponsiveAppBar />
      <MainContainer
        sx={{
          pt: { xs: 15, sm: 17 },
          ...(isMapView ? { pb: 0, px: 0 } : undefined),
        }}
      >
        {isMapView ? (
          <MapView restaurants={restaurants} />
        ) : (
          <ListView restaurants={restaurants} />
        )}
      </MainContainer>
      <Stack
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1)",
          transform: `translateY(${trigger ? 80 : 0}px)`,
        }}
      >
        <Fab
          variant="extended"
          sx={{ margin: "auto", alignSelf: "center", mb: 2 }}
          color="inherit"
          onClick={() => setisMapView((state) => !state)}
        >
          {!isMapView && (
            <>
              <MapIcon sx={{ mr: 1 }} />
              Show map
            </>
          )}
          {isMapView && (
            <>
              <ViewListIcon sx={{ mr: 1 }} />
              Show list
            </>
          )}
        </Fab>
        {!isMapView && <FixedBottomNavigation />}
      </Stack>
    </>
  );
};
export default HomeScreen;
