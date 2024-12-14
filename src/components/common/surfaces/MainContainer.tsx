import { Box, Container, ContainerOwnProps } from "@mui/material";
import React from "react";

type MainContainerProps = ContainerOwnProps & {
  disablePadding?: boolean;
  fullHeight?: boolean;
};
const MainContainer = ({
  children,
  sx,
  disablePadding = false,
  fullHeight = false,
  ...props
}: MainContainerProps) => {
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        width: "100%",
        overflowY: "auto",
        pb: { xs: 8, md: 0 },
        pt: { xs: 2, md: 8 },
        ...sx,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          minHeight: "100%",
          height: fullHeight ? "100%" : "auto",
          px: disablePadding ? 0 : 2,
        }}
        {...props}
      >
        {children}
      </Container>
    </Box>
  );
};

export default MainContainer;
