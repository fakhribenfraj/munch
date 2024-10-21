"use server";
import { routes, dashboardRoutes } from "@/constants/routes";
import { getTranslations } from "next-intl/server";

const getSidebarLinks = async () => {
  const t = await getTranslations("sidebar.links");
  const getIconUrl = (name: string) => `/assets/icons/common/${name}.svg`;
  return [
    {
      category: t("clients"),
      links: [
        {
          label: "overview",
          url: dashboardRoutes.OVERVIEW,
          icon: getIconUrl("organisation"),
        },
        {
          label: "profile",
          icon: getIconUrl("users"),
          url: routes.ACCOUNT,
        },
      ],
    },
  ];
};

export { getSidebarLinks };
