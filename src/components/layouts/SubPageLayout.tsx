import { AppBar, Container, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import ReturnButton from "../common/navigation/ReturnButton";
import ResponsiveAppBar from "../custom/ResponsiveAppBar";

type SubPageLayoutProps = {
  children: ReactNode;
  disableTopGutter?: boolean;
  buttonVariant?: "contained" | "text";
};
const SubPageLayout = ({
  children,
  disableTopGutter,
  buttonVariant,
}: SubPageLayoutProps) => {
  return (
    <>
      <ResponsiveAppBar hideSearchField />
      <AppBar
        position="fixed"
        sx={{
          display: { md: "none" },
          zIndex: 1,
        }}
      >
        <Toolbar>
          <ReturnButton
            sx={{
              ...(buttonVariant == "contained" && {
                bgcolor: "grey.200",
              }),
            }}
          />
        </Toolbar>
      </AppBar>
      {!disableTopGutter && <Toolbar />}
      <Container
        maxWidth="xl"
        component="main"
        sx={{
          pt: { xs: 0, md: 4 },
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default SubPageLayout;
