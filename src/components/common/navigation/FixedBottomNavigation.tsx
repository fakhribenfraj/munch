"use client";
import { routes } from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const FixedBottomNavigation = () => {
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
              label: "Account",
              icon: <AccountCircleOutlinedIcon />,
              url: routes.ACCOUNT,
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
    <Paper
      sx={{
        display: { xs: "block", md: "none" },
        borderRadius: "1rem 1rem 0 0",
        overflow: "hidden",
        boxShadow: 24,
        py: 1,
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
  );
};

export default FixedBottomNavigation;
