import { Box, Container, ContainerOwnProps } from "@mui/material";
import React from "react";

const MainContainer = ({ children, sx, ...props }: ContainerOwnProps) => {
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        width: "100%",
        overflowY: "auto",
        pb: 9,
        pt: { xs: 2, md: 8 },
        ...sx,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          width: "100%",
        }}
        {...props}
      >
        {children}
      </Container>
    </Box>
  );
};

export default MainContainer;
