import { AppBar, Container, Toolbar } from "@mui/material";
import React, { ReactNode } from "react";
import MainContainer from "../common/surfaces/MainContainer";
import ReturnButton from "../common/navigation/ReturnButton";
import ResponsiveAppBar from "../custom/ResponsiveAppBar";

type SubPageLayoutProps = {
  children: ReactNode;
};
const SubPageLayout = ({ children }: SubPageLayoutProps) => {
  return (
    <>
      <ResponsiveAppBar hideSearchField />
      <AppBar
        position="fixed"
        sx={{
          display: { md: "none" },
          zIndex: 1,
        }}
      >
        <Toolbar>
          <ReturnButton />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
    </>
  );
};

export default SubPageLayout;
