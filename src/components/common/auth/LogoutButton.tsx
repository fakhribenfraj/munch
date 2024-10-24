"use client";
import { logoutUser } from "@/actions/authorization/logoutUser";
import { routes } from "@/constants/routes";
import { Button, ButtonProps } from "@mui/material";
import { signOut } from "next-auth/react";

const LogoutButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="outlined"
      fullWidth
      onClick={async (event) => {
        logoutUser();
        signOut({ callbackUrl: routes.HOME });
        props.onClick && props.onClick(event);
      }}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
