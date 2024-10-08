"use client";
import React, { useEffect, useMemo, useState } from "react";
import HideOnScroll from "./HideOnScroll";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Fab,
  Paper,
  Stack,
} from "@mui/material";
import { routes } from "@/constants/routes";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";

const FixedBottomNavigation = ({ showMapLink }: { showMapLink?: boolean }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(-1);
  const pathname = usePathname();
  const { data: session } = useSession();

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
    <Stack
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      {showMapLink && (
        <Fab
          variant="extended"
          href="/map"
          sx={{ margin: "auto", alignSelf: "center", mb: 2 }}
          color="inherit"
        >
          <MapIcon sx={{ mr: 1 }} />
          Map
        </Fab>
      )}
      <HideOnScroll direction="up">
        <Paper
          sx={{
            display: { xs: "block", md: "none" },
            borderRadius: "1rem 1rem 0 0",
            overflow: "hidden",
            boxShadow: 24,
            py: 1.5,
          }}
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
    </Stack>
  );
};

export default FixedBottomNavigation;
