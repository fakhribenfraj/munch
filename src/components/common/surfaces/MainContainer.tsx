import { Container, ContainerOwnProps } from "@mui/material";
import React from "react";

const MainContainer = ({ children, sx, ...props }: ContainerOwnProps) => {
  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{
        height: "100%",
        width: "100%",
        overflowY: "auto",
        pb: 9,
        pt: { xs: 2, md: 8 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
