import { ReactNode } from "react";
import FixedBottomNavigation from "../common/navigation/FixedBottomNavigation";
import MainContainer from "../common/surfaces/MainContainer";
import ResponsiveAppBar from "../custom/ResponsiveAppBar";
import HideOnScroll from "../common/navigation/HideOnScroll";
import { Box } from "@mui/material";

type MainLayoutProps = {
  children: ReactNode;
  hideSearchField?: boolean;
};
const MainLayout = ({ children }: MainLayoutProps) => {
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
          }}
        >
          <FixedBottomNavigation />
        </Box>
      </HideOnScroll>
    </>
  );
};

export default MainLayout;
