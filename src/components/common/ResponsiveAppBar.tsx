"use client";
import routes from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
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
  const [activeTabIndex, setactiveTabIndex] = useState(0);

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
      setactiveTabIndex(
        navigationItems.findIndex(
          (item) =>
            item.url && item.url != routes.HOME && pathname.startsWith(item.url)
        )
      );
    }
  }, [pathname, navigationItems]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            backgroundColor: "common.white",
            boxShadow: { xs: 0, md: 3 },
            zIndex: 1,
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
              color="primary"
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
                  boxShadow: 4,
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
      </AppBar>
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
