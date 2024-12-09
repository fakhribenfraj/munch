"use client";
import { routes } from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useScrollTrigger,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const FixedBottomNavigation = () => {
  const t = useTranslations();
  const [activeTabIndex, setActiveTabIndex] = useState(-1);
  const pathname = usePathname();
  const { data: session } = useSession();
  const trigger = useScrollTrigger();
  const navigationItems = useMemo(
    () => [
      { label: t("EXPLORE"), icon: <SearchIcon />, url: routes.HOME },
      ...(session
        ? [
            {
              label: t("WISHLIST"),
              icon: <FavoriteBorderIcon />,
              url: routes.WISHLIST,
            },
            {
              label: t("NOTIFICATIONS"),
              icon: <NotificationsNoneIcon />,
              url: routes.NOTIFICATION,
            },
            {
              label: t("ACCOUNT"),
              icon: <AccountCircleOutlinedIcon />,
              url: routes.ACCOUNT,
            },
          ]
        : [
            {
              label: t("SIGNIN"),
              icon: <AccountCircleOutlinedIcon />,
              url: routes.SIGNIN,
            },
          ]),
    ],
    [session, t]
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
        zIndex: 10,
        transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1)",
        transform: `translateY(${trigger ? "100%" : 0})`,
      }}
    >
      <BottomNavigation showLabels value={activeTabIndex}>
        {navigationItems.map((item) => (
          <BottomNavigationAction
            key={"nav-bottom-" + item.label}
            href={item.url}
            label={item.label}
            icon={item.icon}
            sx={{ textTransform: "capitalize" }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default FixedBottomNavigation;
