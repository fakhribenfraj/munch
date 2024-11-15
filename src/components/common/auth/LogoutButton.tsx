"use client";
import { logoutUser } from "@/actions/authorization/logoutUser";
import { routes } from "@/constants/routes";
import { Button, ButtonProps } from "@mui/material";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

const LogoutButton = ({ sx, onClick, ...props }: ButtonProps) => {
  const t = useTranslations();
  return (
    <Button
      variant="outlined"
      fullWidth
      {...props}
      sx={{
        textTransform: "capitalize",
        ...sx,
      }}
      onClick={async (event) => {
        logoutUser();
        signOut({ callbackUrl: routes.HOME });
        onClick && onClick(event);
      }}
    >
      {t("LOGOUT")}
    </Button>
  );
};

export default LogoutButton;
