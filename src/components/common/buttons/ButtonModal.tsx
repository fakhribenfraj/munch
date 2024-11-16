"use client";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  ButtonBaseProps,
  ButtonProps,
  CardProps,
  Dialog,
  DialogContent,
  DialogProps,
  IconButton,
  IconButtonProps,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { ReactNode, createContext, useContext, useState } from "react";

type ModalContextType = {
  handleClose: VoidFunction;
};
const ModalContext = createContext<ModalContextType>({
  handleClose: () => {},
});

export type ButtonModalProps = {
  label?: string;
  children: ReactNode;
  buttonProps?: ButtonProps | IconButtonProps;
  cardProps?: CardProps;
  icon?: ReactNode;
  onClose?: VoidFunction;
};
const ButtonModal = ({
  children,
  label,
  buttonProps,
  cardProps,
  icon,
  onClose,
}: ButtonModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };
  const contextValue = {
    handleClose,
  };
  const triggerProps: ButtonBaseProps = {
    ...buttonProps,
    onClick: (event) => {
      handleOpen();
      buttonProps?.onClick && buttonProps?.onClick(event);
    },
    sx: { textTransform: "capitalize", ...buttonProps?.sx },
  };
  const trigger = icon ? (
    <IconButton {...(triggerProps as IconButtonProps)}>{icon}</IconButton>
  ) : (
    <Button {...(triggerProps as ButtonProps)}> {label}</Button>
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {trigger}

      {/* <CardModal {...cardProps} open={isOpen} onClose={() => setIsOpen(false)}>
        <>{children}</>
      </CardModal> */}
      <Dialog
        {...cardProps}
        open={isOpen}
        onClose={handleClose}
        sx={{
          maxHeight: "90vh",
          outline: "none",
          ...cardProps?.sx,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Dialog>
    </ModalContext.Provider>
  );
};

export const CloseModalButton = ({
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const { handleClose } = useModal();
  const t = useTranslations();

  return (
    <Button
      {...props}
      onClick={(e) => {
        handleClose();
        onClick && onClick(e);
      }}
    >
      {children ?? t("CANCEL")}
    </Button>
  );
};

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "Modal compound components must be rendered within the Modal component"
    );
  }
  return context;
}
export default ButtonModal;
