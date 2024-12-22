"use client";
import { AppBar, Box, Container, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import FilterShortcuts from "./FilterShortcuts";
import Logo from "./Logo";

const SearchBar = dynamic(() => import("../filters/Searchbar"));
const AccountMenu = dynamic(() => import("./user/AccountMenu"));

type ResponsiveAppBarProps = {
  hideSearchField?: boolean;
  backButton?: ReactNode;
};

function ResponsiveAppBar({
  hideSearchField,
  backButton,
}: ResponsiveAppBarProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        display: {
          xs: hideSearchField && !backButton ? "none" : "block",
          md: "block",
        },
        backgroundColor: "common.white",
        boxShadow: 3,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            columnGap: 2,
          }}
        >
          {backButton && (
            <Box sx={{ display: { xs: "initial", md: "none" } }}>
              {backButton}
            </Box>
          )}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Logo direction="horizontal" />
          </Box>

          {!hideSearchField && (
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", md: "70%", lg: "50%" },
                mt: { xs: 1, md: 0 },
              }}
            >
              <SearchBar />
            </Box>
          )}
          <Stack
            flexDirection="row"
            columnGap={1}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <AccountMenu />
          </Stack>
        </Container>
      </Toolbar>

      {!hideSearchField && (
        <Container maxWidth="lg" disableGutters>
          <Toolbar disableGutters>
            <FilterShortcuts
              filters={[
                "sandwiches",
                "pizza",
                "pasta",
                "spicy",
                "drinks",
                "coffe",
                "ice cream",
                "fast food",
                "cake",
              ]}
            />
          </Toolbar>
        </Container>
      )}
    </AppBar>
  );
}
export default ResponsiveAppBar;
