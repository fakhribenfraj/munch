"use client";
import { ButtonBase, Menu, MenuItem, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import ActionButton from "../common/inputs/ActionButton";
type ActionsMenuProps = {
  actions: { action: any; label: string; warning: string; icon?: ReactNode }[];
  children: ReactNode;
};

const ActionsMenu = ({ children, actions }: ActionsMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <ButtonBase
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
      >
        {children}
      </ButtonBase>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        {actions.map((act) => (
          <MenuItem key={act.label} disableRipple>
            <ActionButton
              serverAction={act.action}
              onConfirm={handleClose}
              label={act.label}
              buttonProps={{
                startIcon: act.icon,
                disableRipple: true,
              }}
            >
              <Typography>{act.warning}</Typography>
            </ActionButton>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ActionsMenu;
