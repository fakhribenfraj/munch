"use client";
import routes from "@/constants/routes";
import { ButtonBase } from "@mui/material";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <ButtonBase
      onClick={() => {
        signOut({ callbackUrl: routes.HOME });
      }}
    >
      Log out
    </ButtonBase>
  );
};

export default LogoutButton;
