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
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import Logo from "./Logo";

const SearchBar = dynamic(() => import("../filters/Searchbar"));
const AccountMenu = dynamic(() => import("./user/AccountMenu"));
const HorizontalScrollbarBox = dynamic(
  () => import("../common/surfaces/HorizontalScrollbarBox")
);

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
            justifyContent: "center",
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
  );
}
export default ResponsiveAppBar;
