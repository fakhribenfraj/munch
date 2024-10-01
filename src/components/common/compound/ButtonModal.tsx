"use client";
import { Button, ButtonProps, CardProps } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";
import CardModal from "../surfaces/CardModal";

type ModalContextType = {
  handleClose: VoidFunction;
};
const ModalContext = createContext<ModalContextType>({
  handleClose: () => {},
});

export type ButtonModalProps = {
  label: string;
  children: ReactNode;
  buttonProps?: ButtonProps;
  cardProps?: CardProps;
};
const ButtonModal = ({
  children,
  label,
  buttonProps,
  cardProps,
}: ButtonModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const contextValue = {
    handleClose,
  };
  return (
    <ModalContext.Provider value={contextValue}>
      <Button
        {...buttonProps}
        onClick={(event) => {
          handleOpen();
          buttonProps?.onClick && buttonProps?.onClick(event);
        }}
        sx={{ textTransform: "capitalize", ...buttonProps?.sx }}
      >
        {label}
      </Button>
      <CardModal {...cardProps} open={isOpen} onClose={() => setIsOpen(false)}>
        <>{children}</>
      </CardModal>
    </ModalContext.Provider>
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
