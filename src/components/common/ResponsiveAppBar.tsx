"use client";
import routes from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CakeIcon from "@mui/icons-material/Cake";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Chip,
  Container,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import LanguageSelect from "../inputs/LanguageSelect";
import AccountMenu from "./AccountMenu";
import Logo from "./Logo";
import HideOnScroll from "./navigation/HideOnScroll";
function ResponsiveAppBar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [activeTabIndex, setActiveTabIndex] = useState(-1);

  const navigationItems = useMemo(
    () => [
      { label: "Explore", icon: <SearchIcon />, url: routes.HOME },
      ...(session
        ? [
            {
              label: "Wishlist",
              icon: <FavoriteBorderIcon />,
              url: routes.WISHLIST,
            },
            {
              label: "Notification",
              icon: <NotificationsNoneIcon />,
              url: routes.NOTIFICATION,
            },
            {
              label: "Profile",
              icon: <AccountCircleOutlinedIcon />,
              url: routes.PROFILE,
            },
          ]
        : [
            {
              label: "Log in",
              icon: <AccountCircleOutlinedIcon />,
              url: routes.SIGNIN,
            },
          ]),
    ],
    [session]
  );
  useEffect(() => {
    if (pathname && pathname != routes.HOME) {
      setActiveTabIndex(
        navigationItems.findIndex(
          (item) =>
            item.url && item.url != routes.HOME && pathname.startsWith(item.url)
        )
      );
    } else {
      setActiveTabIndex(0);
    }
  }, [pathname, navigationItems]);

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
              overflowX: "auto",
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
      <HideOnScroll direction="up">
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            display: { xs: "block", md: "none" },
            borderRadius: "1rem 1rem 0 0",
            zIndex: 10,
            overflow: "hidden",
          }}
          elevation={24}
        >
          <BottomNavigation showLabels value={activeTabIndex}>
            {navigationItems.map((item) => (
              <BottomNavigationAction
                key={"nav-bottom-" + item.label}
                href={item.url}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </BottomNavigation>
        </Paper>
      </HideOnScroll>
    </>
  );
}
export default ResponsiveAppBar;
