"use client";
import CakeIcon from "@mui/icons-material/Cake";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import {
  AppBar,
  Box,
  Chip,
  Container,
  InputAdornment,
  Stack,
  TextField
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import LanguageSelect from "../inputs/LanguageSelect";
import AccountMenu from "./AccountMenu";
import Logo from "./Logo";
function ResponsiveAppBar() {


  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "common.white",
          boxShadow: 3,
          zIndex: 1,
        }}
      >
        <Stack>
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
              <TextField
                color="warning"
                fullWidth
                placeholder="search meal..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    boxShadow: 1,
                  },
                }}
              />
              <Stack
                flexDirection="row"
                columnGap={1}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <LanguageSelect />
                <AccountMenu />
              </Stack>
            </Container>
          </Toolbar>
          <Toolbar
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              gap: { xs: 1, md: 2 },
              overflowX: "scroll",
              "::-webkit-scrollbar": {
                "-webkit-appearance": "none",
                height: "7px",
              },
              "::-webkit-scrollbar-thumb": {
                borderRadius: 0.5,
                backgroundColor: "grey.400",
                boxShadow: "0 0 2px grey.100",
              },
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
              />
            ))}
          </Toolbar>
        </Stack>
      </AppBar>
      <Toolbar />
      <Toolbar />
      
    </>
  );
}
export default ResponsiveAppBar;
