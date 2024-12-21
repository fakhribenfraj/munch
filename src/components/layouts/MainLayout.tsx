import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import HideOnScroll from "../common/navigation/HideOnScroll";
import MainContainer from "../common/surfaces/MainContainer";
const ResponsiveAppBar = dynamic(() => import("../custom/ResponsiveAppBar"));
const FixedBottomNavigation = dynamic(
  () => import("../common/navigation/FixedBottomNavigation")
);

type MainLayoutProps = {
  children: ReactNode;
  hideSearchField?: boolean;
  activeTab: "explore" | "wishlist" | "account";
};
const MainLayout = ({ children, activeTab }: MainLayoutProps) => {
  return (
    <>
      <ResponsiveAppBar hideSearchField />
      <MainContainer>{children}</MainContainer>
      <HideOnScroll direction="up">
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            left: 0,
            width: "100%",
            zIndex: "fab",
          }}
        >
          <FixedBottomNavigation activeTab={activeTab} />
        </Box>
      </HideOnScroll>
    </>
  );
};

export default MainLayout;
