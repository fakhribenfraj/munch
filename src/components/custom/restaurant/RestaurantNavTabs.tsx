import NavTabs from "@/components/common/navigation/NavTabs";
import Searchbar from "@/components/filters/Searchbar";
import { routes } from "@/constants/routes";
import { Box, Stack, Toolbar } from "@mui/material";

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
        borderBottom: "1px solid ",
        borderColor: "divider",
        alignItems: "center",
      }}
    >
      <Toolbar sx={{ display: "block", width: { md: "25rem" } }}>
        <NavTabs
          textColor="primary"
          links={tabs}
          active={tabs.findIndex(
            (tab) => tab.label.toLocaleLowerCase() == active
          )}
          variant="fullWidth"
        />
      </Toolbar>
      {showSearchBar && (
        <Toolbar sx={{ px: { lg: 8 } }}>
          <Searchbar />
        </Toolbar>
      )}
    </Box>
  );
};

export default RestaurantNavTabs;
