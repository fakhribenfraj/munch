"use client";
import useActionSnackbar from "@/hooks/useActionSnackbar";
import {
  Button,
  ButtonBase,
  ButtonProps,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { MouseEventHandler, useState, useTransition } from "react";
import ButtonModal, {
  ButtonModalProps,
  useModal,
} from "../compound/ButtonModal";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTranslations } from "next-intl";
import { useMenu } from "../compound/ButtonMenu";
import { useSnackbar } from "notistack";
type ActionButtonProps = {
  serverAction: () => Promise<any>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  parentContext?: "modal" | "menu";
};
const ActionButton = ({
  children,
  serverAction,
  onConfirm,
  parentContext,
  ...props
}: ActionButtonProps & ButtonModalProps) => {
  const { handleClose } = useMenu();

  return (
    <ButtonModal {...props}>
      <Stack rowGap={2}>
        {children}
        <ActionConfirmationModal
          serverAction={serverAction}
          onConfirm={(event) => {
            onConfirm && onConfirm(event);
            if (parentContext == "menu") {
              handleClose();
            }
          }}
        />
      </Stack>
    </ButtonModal>
  );
};

const ActionConfirmationModal = ({
  serverAction,
  onConfirm,
}: ActionButtonProps) => {
  const { handleClose } = useModal();
  const t_actions = useTranslations("genericActions");
  const [isPending, startTransition] = useTransition();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Stack direction="row" columnGap={2} sx={{ alignSelf: "flex-end" }}>
      <Button onClick={handleClose}>{t_actions("cancel")}</Button>
      <LoadingButton
        loading={isPending}
        disabled={isPending}
        variant="contained"
        onClick={(event) => {
          startTransition(async () => {
            const res = await serverAction();
            if (res.error) {
              enqueueSnackbar({ variant: "error", message: res.error });
            }
            handleClose();
            onConfirm && onConfirm(event);
          });
        }}
      >
        {t_actions("confirm")}
      </LoadingButton>
    </Stack>
  );
};

export default ActionButton;
