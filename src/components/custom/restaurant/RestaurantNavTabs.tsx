import NavTabs from "@/components/common/navigation/NavTabs";
import { routes } from "@/constants/routes";
import { Box } from "@mui/material";

type RestaurantNavTabsProps = {
  id: string;
  active: "menu" | "overview" | "reviews";
  hideBorder?: boolean;
};
const RestaurantNavTabs = ({
  id,
  active,
  hideBorder,
}: RestaurantNavTabsProps) => {
  const tabs = [
    { label: "Overview", url: `${routes.RESTAURANTS}/${id}` },
    { label: "Menu", url: `${routes.RESTAURANTS}/${id}/menu` },
    { label: "Reviews", url: `${routes.RESTAURANTS}/${id}/reviews` },
  ];
  return (
    <Box
      sx={{
        width: { md: "25rem" },
        position: { xs: "sticky", md: "static" },
        top: { xs: 0, sm: -65 },
        zIndex: "appBar",
        bgcolor: "grey.200",
        transform: "scaleX(1.01)",
        borderBottom: hideBorder ? "none" : "1px solid ",
        borderColor: "divider",
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
