import NavTabs from "@/components/common/navigation/NavTabs";
import Searchbar from "@/components/filters/Searchbar";
import { routes } from "@/constants/routes";
import { Box, Toolbar } from "@mui/material";

type RestaurantNavTabsProps = {
  id: string;
  active: "menu" | "overview" | "reviews";
  showSearchBar?: boolean;
};
const RestaurantNavTabs = ({
  id,
  active,
  showSearchBar,
}: RestaurantNavTabsProps) => {
  const tabs = [
    { label: "Overview", url: `${routes.RESTAURANTS}/${id}` },
    { label: "Menu", url: `${routes.RESTAURANTS}/${id}/menu` },
    { label: "Reviews", url: `${routes.RESTAURANTS}/${id}/reviews` },
  ];
  return (
    <Box
      sx={{
        position: { xs: "sticky", md: "static" },
        top: 0,
        zIndex: "subBar",
        bgcolor: "common.white",

        alignItems: "center",
      }}
    >
      <NavTabs
        sx={{ width: { xs: "100%", md: "25rem" } }}
        textColor="primary"
        links={tabs}
        active={tabs.findIndex(
          (tab) => tab.label.toLocaleLowerCase() == active
        )}
        variant="fullWidth"
      />
      {showSearchBar && (
        <Toolbar sx={{ px: { lg: 8 }, py: 1 }}>
          <Searchbar />
        </Toolbar>
      )}
    </Box>
  );
};

export default RestaurantNavTabs;
