import NavTabs from "@/components/common/navigation/NavTabs";
import { routes } from "@/constants/routes";
import { Box } from "@mui/material";

type RestaurantNavTabsProps = {
  id: string;
  active: "menu" | "overview" | "reviews";
};
const RestaurantNavTabs = ({ id, active }: RestaurantNavTabsProps) => {
  const tabs = [
    { label: "Overview", url: `${routes.RESTAURANTS}/${id}` },
    { label: "Menu", url: `${routes.RESTAURANTS}/${id}/menu` },
    { label: "Reviews", url: `${routes.RESTAURANTS}/${id}/reviews` },
  ];
  return (
    <Box
      sx={{
        width: { md: "25rem" },
        position: "sticky",
        top: { xs: 45, md: 60 },
        zIndex: 10,
        bgcolor: "grey.200",
        transform: "scaleX(1.01)",
      }}
    >
      <NavTabs
        textColor="primary"
        links={tabs}
        active={tabs.findIndex(
          (tab) => tab.label.toLocaleLowerCase() == active
        )}
        variant="fullWidth"
      />
    </Box>
  );
};

export default RestaurantNavTabs;
