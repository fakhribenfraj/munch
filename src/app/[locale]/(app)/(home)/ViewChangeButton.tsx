"use client";
import { routes } from "@/constants/routes";
import { Fab, FabProps } from "@mui/material";
import React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useTranslations } from "next-intl";
import MapIcon from "@mui/icons-material/Map";

const ViewChangeButton = ({
  isMapView,
  sx,
  ...props
}: FabProps & { isMapView: boolean }) => {
  const t = useTranslations();
  return (
    <Fab
      variant="extended"
      sx={{
        margin: "auto",
        alignSelf: "center",
        mb: 2,
        textTransform: "capitalize",
        position: "fixed",
        bottom: "0",
        left: "50%",
        transform: `translateX(-50%)`,
        ...sx,
      }}
      color="inherit"
      href={isMapView ? routes.HOME : routes.MAP}
      {...props}
    >
      {!isMapView && (
        <>
          <MapIcon />
          {t("SHOW_MAP")}
        </>
      )}
      {isMapView && (
        <>
          <ViewListIcon />
          {t("SHOW_LIST")}
        </>
      )}
    </Fab>
  );
};

export default ViewChangeButton;
