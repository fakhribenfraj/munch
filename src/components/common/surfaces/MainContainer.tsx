import { Box, Container, ContainerOwnProps } from "@mui/material";
import React from "react";

type MainContainerProps = ContainerOwnProps & {
  disablePadding?: boolean;
};
const MainContainer = ({
  children,
  sx,
  disablePadding = false,
  ...props
}: MainContainerProps) => {
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
          width: "100%",
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
