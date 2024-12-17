import { Box, Stack } from "@mui/material";
import React from "react";

const Dots = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        pb: 2,
        transform: "translateX(-50%)",
        "& li": {
          display: "block",
        },
        "& li.slick-active *": {
          filter: "brightness(1)",
        },
      }}
    >
      <Stack direction="row" spacing={1} sx={{ margin: "0px" }}>
        {children}
      </Stack>
    </Box>
  );
};

export default Dots;
