"use client";
import { ButtonBase, ButtonProps, Menu, MenuProps } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";

type MenuContextType = {
  handleClose: VoidFunction;
};
const MenuContext = createContext<MenuContextType>({
  handleClose: () => {},
});

export type ButtonMenuProps = {
  anchor: ReactNode;
  children: ReactNode;
  buttonProps?: ButtonProps;
  menuProps?: MenuProps;
};
const ButtonMenu = ({
  children,
  anchor,
  buttonProps,
  menuProps,
}: ButtonMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const contextValue = {
    handleClose,
  };
  return (
    <MenuContext.Provider value={contextValue}>
      <ButtonBase
        {...buttonProps}
        onClick={handleOpen}
        sx={{ textTransform: "capitalize", ...buttonProps?.sx }}
        disableRipple
      >
        {anchor}
      </ButtonBase>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        {...menuProps}
      >
        {children}
      </Menu>
    </MenuContext.Provider>
  );
};
export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error(
      "Menu compound components must be rendered within the Modal component"
    );
  }
  return context;
}
export default ButtonMenu;
