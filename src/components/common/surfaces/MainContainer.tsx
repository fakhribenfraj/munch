import { Box, Container, ContainerOwnProps, ContainerProps } from "@mui/material";
import React from "react";

type MainContainerProps = ContainerProps & {
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
        pb: { xs: 9, md: 0 },
        pt: { xs: 3, sm: 4, md: 8 },
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
