"use client";
import { logoutUser } from "@/actions/authorization/logoutUser";
import { routes } from "@/constants/routes";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={async () => {
        logoutUser();
        signOut({ callbackUrl: routes.HOME });
      }}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
