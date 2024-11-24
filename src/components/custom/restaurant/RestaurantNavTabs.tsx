import NavTabs from "@/components/common/navigation/NavTabs";
import { routes } from "@/constants/routes";
import { Box } from "@mui/material";
import React, { useMemo } from "react";

type RestaurantNavTabsProps = {
  id: string;
  active: number;
};
const RestaurantNavTabs = ({ id, active }: RestaurantNavTabsProps) => {
  const tabs = useMemo(
    () => [
      { label: "Overview", url: `${routes.RESTAURANTS}/${id}` },
      { label: "Menu", url: `${routes.RESTAURANTS}/${id}/menu` },
      { label: "Reviews", url: `${routes.RESTAURANTS}/${id}/reviews` },
    ],
    [id]
  );
  return (
    <Box
      sx={{
        width: { md: "25rem" },
        position: "sticky",
        top: { xs: 45, md: 60 },
        zIndex: 1,
        bgcolor: "grey.200",
      }}
    >
      <NavTabs
        textColor="primary"
        links={tabs}
        active={active}
        variant="fullWidth"
      />
    </Box>
  );
};

export default RestaurantNavTabs;
