import { Box, Stack } from "@mui/material";
import React from "react";

type DotsProps = {
  children: React.ReactNode;
  position?: "top" | "bottom" | "right" | "left";
  offset?: number;
};

const Dots = ({ children, position = "bottom", offset = 1 }: DotsProps) => {
  const positionStyles = {
    top: {
      top: 0,
      left: "50%",
      mt: -offset,
      transform: "translateX(-50%)",
    },
    bottom: {
      bottom: 0,
      left: "50%",
      mb: -offset,
      transform: "translateX(-50%)",
    },
    left: {
      left: 0,
      top: "50%",
      ml: -offset,
      transform: "translateY(-50%)",
    },
    right: {
      right: 0,
      top: "50%",
      mr: -offset,
      transform: "translateY(-50%)",
    },
  };
  return (
    <Box
      sx={{
        position: "absolute",
        ...positionStyles[position],
        "& li": {
          display: "block",
        },
        "& li.slick-active *": {
          opacity: 1,
        },
      }}
    >
      <Stack
        component="ul"
        direction={
          position === "left" || position === "right" ? "column" : "row"
        }
        spacing={1}
        sx={{ margin: "0px" }}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default Dots;
