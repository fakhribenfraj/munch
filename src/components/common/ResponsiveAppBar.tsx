"use client";
import { AppBar, Container, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import LanguageSelect from "../inputs/LanguageSelect";
import AccountMenu from "./AccountMenu";
import Logo from "./Logo";

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed">
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          backgroundColor: "common.white",
          boxShadow: 3,
          zIndex: 1,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo direction="horizontal"/>
          <Stack flexDirection="row" columnGap={1}>
            <LanguageSelect />
            <AccountMenu />
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
