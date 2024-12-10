"use client";
import { GetRestaurantsResponse } from "@/actions/restaurants/getRestaurants";
import MapIcon from "@mui/icons-material/Map";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Box, Stack, useScrollTrigger } from "@mui/material";
import { useState } from "react";

import MainContainer from "../../common/surfaces/MainContainer";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useFilterStore } from "@/providers/filter-store-provider";

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
  const t = useTranslations();
  const [isMapView, setIsMapView] = useState<boolean>(false);
  const trigger = useScrollTrigger();

  return (
    <>
      <ResponsiveAppBar />
      <MainContainer
        sx={{
          pt: { xs: 15, sm: 17 },
          ...(isMapView ? { pb: 0, px: { xs: 0 } } : undefined),
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
          zIndex: "fab",
          transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1)",
          transform: `translateY(${trigger || isMapView ? "100%" : 0})`,
        }}
      >
        <Box
          sx={{
            position: "relative",
            transform: isMapView ? "none" : `translateY(100%)`,
          }}
        >
          <Fab
            variant="extended"
            sx={{
              margin: "auto",
              alignSelf: "center",
              mb: 2,
              textTransform: "capitalize",
              position: "absolut",
              top: "0",
              left: "50%",
              transform: `translate(-50% , calc(-100% - 1rem))`,
            }}
            color="inherit"
            onClick={() => setIsMapView((state) => !state)}
          >
            {!isMapView && (
              <>
                <MapIcon sx={{ mr: 1 }} />
                {t("SHOW_MAP")}
              </>
            )}
            {isMapView && (
              <>
                <ViewListIcon sx={{ mr: 1 }} />
                {t("SHOW_LIST")}
              </>
            )}
          </Fab>
        </Box>
        {!isMapView && <FixedBottomNavigation />}
      </Stack>
    </>
  );
};
export default HomeScreen;
