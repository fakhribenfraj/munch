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
  Paper,
  Stack,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import LanguageSelect from "../inputs/LanguageSelect";
import AccountMenu from "./AccountMenu";
import Logo from "./Logo";
import { useEffect, useMemo, useState } from "react";
function ResponsiveAppBar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [activeTabIndex, setactiveTabIndex] = useState(0);

  const navigationItems = useMemo(
    () => [
      { label: "Explore", icon: <SearchIcon />, url: "/" },
      ...(session
        ? [
            { label: "Wishlist", icon: <FavoriteBorderIcon />, url: "" },
            { label: "Notification", icon: <NotificationsNoneIcon />, url: "" },
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
    setactiveTabIndex(
      navigationItems.findIndex(
        (item) => item.url && item.url != "/" && pathname.startsWith(item.url)
      )
    );
  }, [pathname, navigationItems]);

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
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
              <Logo direction="horizontal" />
              <Stack flexDirection="row" columnGap={1}>
                <LanguageSelect />
                <AccountMenu />
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "block", md: "none" },
          borderRadius: 2,
        }}
        elevation={3}
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
    </>
  );
}
export default ResponsiveAppBar;
