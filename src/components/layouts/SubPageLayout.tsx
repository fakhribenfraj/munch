import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  AppBar,
  Box,
  Breadcrumbs,
  Container,
  ContainerProps,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import ReturnButton from "../common/navigation/ReturnButton";
import ResponsiveAppBar from "../custom/ResponsiveAppBar";

type SubPageLayoutProps = ContainerProps & {
  children: ReactNode;
  disableTopGutter?: boolean;
  buttonVariant?: "contained" | "text";
  breadcrumbs?: { label: string; href: string }[];
};
const SubPageLayout = ({
  children,
  disableTopGutter,
  buttonVariant,
  breadcrumbs,
  ...props
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
        {...props}
        sx={{
          pt: { xs: 0, md: 8 },
          ...props.sx,
        }}
      >
        {breadcrumbs && (
          <Box sx={{ mb: 4 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{
                display: { xs: "none", md: "initial" },
              }}
            >
              {breadcrumbs?.map((item, index) =>
                index == breadcrumbs.length - 1 ? (
                  <Typography key={item.label} sx={{ color: "text.primary" }}>
                    {item.label}
                  </Typography>
                ) : (
                  <Link href={item.href} key={item.label}>
                    {item.label}
                  </Link>
                )
              )}
            </Breadcrumbs>
          </Box>
        )}
        {children}
      </Container>
    </>
  );
};

export default SubPageLayout;
