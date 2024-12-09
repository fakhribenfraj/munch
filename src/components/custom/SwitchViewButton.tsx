"use client";
import { Fab } from "@mui/material";
import React from "react";
import MapIcon from "@mui/icons-material/Map";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useTranslations } from "next-intl";
import { routes } from "@/constants/routes";
type SwitchViewButtonProps = {
  variant: "map" | "list";
};
const SwitchViewButton = ({ variant }: SwitchViewButtonProps) => {
  const t = useTranslations();
  return (
    <Fab
      variant="extended"
      sx={{
        margin: "auto",
        alignSelf: "center",
        mb: 2,
        textTransform: "capitalize",
        position: "absolute",
        top: "0",
        left: "50%",
        transform: `translate(-50% , calc(-100% - 1rem))`,
      }}
      color="inherit"
      href={variant === "map" ? routes.MAP : routes.HOME}
    >
      {variant === "map" && (
        <>
          <MapIcon sx={{ mr: 1 }} />
          {t("SHOW_MAP")}
        </>
      )}
      {variant === "list" && (
        <>
          <ViewListIcon sx={{ mr: 1 }} />
          {t("SHOW_LIST")}
        </>
      )}
    </Fab>
  );
};

export default SwitchViewButton;
