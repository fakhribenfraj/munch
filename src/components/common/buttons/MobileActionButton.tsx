import { Box } from "@mui/material";
import React from "react";

interface MobileActionButtonProps {
  children: React.ReactNode;
}

const MobileActionButton = ({ children }: MobileActionButtonProps) => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        px: 3,
        py: 2,
        zIndex: "appBar",
        backgroundColor: "common.white",
      }}
    >
      {children}
    </Box>
  );
};

export default MobileActionButton;
