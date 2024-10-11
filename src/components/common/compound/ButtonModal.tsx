"use client";
import {
  Button,
  ButtonBaseProps,
  ButtonProps,
  CardProps,
  IconButton,
  IconButtonProps,
} from "@mui/material";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import CardModal from "../surfaces/CardModal";

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
};
const ButtonModal = ({
  children,
  label,
  buttonProps,
  cardProps,
  icon,
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
