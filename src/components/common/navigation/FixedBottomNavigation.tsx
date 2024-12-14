"use client";
import { routes } from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

type FixedBottomNavigationProps = {
  activeTab: "explore" | "wishlist" | "account";
};
const FixedBottomNavigation = ({ activeTab }: FixedBottomNavigationProps) => {
  const t = useTranslations();

  const { data: session } = useSession();
  const tabsIndexes = useMemo(() => {
    return {
      explore: 0,
      wishlist: 1,
      account: 2,
    };
  }, []);
  const navigationItems = useMemo(
    () => [
      { label: t("EXPLORE"), icon: <SearchIcon />, url: routes.HOME },
      ...(session
        ? [
            {
              label: t("WISHLIST"),
              icon: <FavoriteBorderIcon />,
              url: `${routes.WISHLIST}/restaurants`,
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
      <BottomNavigation showLabels value={tabsIndexes[activeTab]}>
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
