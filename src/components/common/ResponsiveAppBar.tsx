"use client";
import CakeIcon from "@mui/icons-material/Cake";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { AppBar, Box, Chip, Container, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AccountMenu from "./AccountMenu";
import SearchBar from "./filters/Searchbar";
import Logo from "./Logo";
import HorizontalScrollbarBox from "./surfaces/HorizontalScrollbarBox";
type ResponsiveAppBarProps = {
  hideSearchField?: boolean;
};
function ResponsiveAppBar({ hideSearchField }: ResponsiveAppBarProps) {
  return (
    <Box
      sx={{
        display: { xs: hideSearchField ? "none" : "block", md: "block" },
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "grey.200",
          boxShadow: 3,
          zIndex: 1,
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
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Logo direction="horizontal" />
            </Box>

            {!hideSearchField && <SearchBar />}
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
          <HorizontalScrollbarBox
            sx={{
              maxWidth: "100%",
              margin: "auto",
            }}
          >
            <Toolbar
              sx={{
                columnGap: { xs: 1, md: 2 },
              }}
            >
              {[
                { label: "sandwiches", icon: <LunchDiningIcon /> },
                { label: "pizza", icon: <LocalPizzaIcon /> },
                { label: "pasta", icon: <DinnerDiningIcon /> },
                { label: "spicy", icon: <WhatshotIcon /> },
                { label: "drinks", icon: <LocalBarIcon /> },
                { label: "coffe", icon: <LocalCafeIcon /> },
                { label: "ice cream", icon: <IcecreamIcon /> },
                { label: "fast food", icon: <FastfoodIcon /> },
                { label: "cake", icon: <CakeIcon /> },
              ].map((category) => (
                <Chip
                  variant="outlined"
                  key={category.label}
                  {...category}
                  clickable
                  sx={{
                    backgroundColor: "common.white",
                  }}
                />
              ))}
            </Toolbar>
          </HorizontalScrollbarBox>
        )}
      </AppBar>
      <Toolbar />
      {!hideSearchField && <Toolbar />}
    </Box>
  );
}
export default ResponsiveAppBar;
