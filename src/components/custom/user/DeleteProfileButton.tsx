"use client";
import deleteProfile from "@/actions/profile/deleteProfile";
import ActionConfirmationButton from "@/components/common/buttons/ActionConfirmationButton";
import { routes } from "@/constants/routes";
import { signOut } from "next-auth/react";
import React from "react";

const DeleteProfileButton = () => {
  return (
    <ActionConfirmationButton
      onConfirm={deleteProfile}
      onSuccess={() => signOut({ callbackUrl: routes.HOME })}
      content="this action will permanently delete your account and it is not reversible"
      color="error"
      title="Delete profile?"
      confirmLabel="delete"
      variant="outlined"
      fullWidth
    >
      delete profile
    </ActionConfirmationButton>
  );
};

export default DeleteProfileButton;
