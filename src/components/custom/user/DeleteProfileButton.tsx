"use client";
import deleteProfile from "@/actions/profile/deleteProfile";
import ActionConfirmationButton from "@/components/common/buttons/ActionConfirmationButton";
import { routes } from "@/constants/routes";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import React from "react";

const DeleteProfileButton = () => {
  const t = useTranslations();

  return (
    <ActionConfirmationButton
      onConfirm={deleteProfile}
      onSuccess={() => signOut({ callbackUrl: routes.HOME })}
      content={t("CONFIRM_DELETE_PROFILE_WARNING")}
      color="error"
      title={`${t("DELETE")} ${t("PROFILE")}?`}
      confirmLabel={t("DELETE")}
      variant="outlined"
      fullWidth
    >
      {t("DELETE_PROFILE")}
    </ActionConfirmationButton>
  );
};

export default DeleteProfileButton;
