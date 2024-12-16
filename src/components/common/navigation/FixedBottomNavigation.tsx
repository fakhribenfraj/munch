"use client";
import HeartIconFilled from "@/components/icons/filled/Heart";
import HomeIconFilled from "@/components/icons/filled/Home";
import HeartIconOutlined from "@/components/icons/outlined/Heart";
import HomeIconOutlined from "@/components/icons/outlined/Home";
import UserIconOutlined from "@/components/icons/outlined/User";
import { routes } from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
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
      {
        label: t("EXPLORE"),
        icon: <HomeIconOutlined />,
        activeIcon: <HomeIconFilled />,
        url: routes.HOME,
      },
      ...(session
        ? [
            {
              label: t("WISHLIST"),
              icon: <HeartIconOutlined />,
              activeIcon: <HeartIconFilled />,
              url: `${routes.WISHLIST}/restaurants`,
            },
            {
              label: t("ACCOUNT"),
              icon: <UserIconOutlined />,
              activeIcon: <UserIconOutlined />,
              url: routes.ACCOUNT,
            },
          ]
        : [
            {
              label: t("SIGNIN"),
              icon: <UserIconOutlined />,
              activeIcon: <UserIconOutlined />,

              url: routes.SIGNIN,
            },
          ]),
    ],
    [session, t]
  );

  return (
    <BottomNavigation
      value={tabsIndexes[activeTab]}
      sx={{
        height: 64,
        display: { xs: "flex", md: "none" },
        borderRadius: "1rem 1rem 0 0",
        px: { xs: 1, sm: 2 },
        boxShadow: 24,
        justifyContent: { xs: "space-between", sm: "space-around" },
      }}
    >
      {navigationItems.map((item, index) => (
        <BottomNavigationAction
          key={"nav-bottom-" + item.label}
          href={item.url}
          aria-label={item.label}
          label={item.label}
          icon={index === tabsIndexes[activeTab] ? item.activeIcon : item.icon}
          sx={{
            flex: "none",
            positio: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "grey.500",
            py: 1,
            textTransform: "capitalize",
            fontWeight: 600,
            "& .MuiBottomNavigationAction-iconOnly": {
              display: "none",
            },
            "&.Mui-selected": {
              justifyContent: "flex-end",
              "& .MuiSvgIcon-root": {
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 48,
                height: 48,
                backgroundColor: "primary.main",
                color: "common.white",
                borderRadius: "50%",
                padding: 1.5,
                boxShadow: 15,
              },
            },
          }}
        />
      ))}
    </BottomNavigation>
  );
};

export default FixedBottomNavigation;
