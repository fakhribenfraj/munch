"use client";
import { routes } from "@/constants/routes";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={() => {
        signOut({ callbackUrl: routes.HOME });
      }}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
