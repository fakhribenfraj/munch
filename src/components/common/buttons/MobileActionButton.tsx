import { Box, Toolbar } from "@mui/material";
import React from "react";

interface MobileActionButtonProps {
  children: React.ReactNode;
}

const MobileActionButton = ({ children }: MobileActionButtonProps) => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Toolbar
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          left: 0,
          px: 2,
          py: 1,
          zIndex: "appBar",
          backgroundColor: "common.white",
        }}
      >
        {children}
      </Toolbar>
      <Toolbar />
    </Box>
  );
};

export default MobileActionButton;
