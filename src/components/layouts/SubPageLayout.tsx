import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  AppBar,
  Box,
  Breadcrumbs,
  Container,
  ContainerProps,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import ReturnButton from "../common/navigation/ReturnButton";
import ResponsiveAppBar from "../custom/ResponsiveAppBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HideOnScroll from "../common/navigation/HideOnScroll";
import MainContainer from "../common/surfaces/MainContainer";

type SubPageLayoutProps = ContainerProps & {
  children: ReactNode;
  disableTopGutter?: boolean;
  buttonVariant?: "contained" | "text";
  breadcrumbs?: { label: string; href: string }[];
  prevPage?: { label: string; href: string };
};
const SubPageLayout = ({
  children,
  disableTopGutter,
  buttonVariant,
  breadcrumbs,
  prevPage,
  ...props
}: SubPageLayoutProps) => {
  return (
    <>
      <ResponsiveAppBar hideSearchField />
      {/* <Box>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "grey.200",
            display: { md: "none" },
          }}
        >
          <Toolbar>
            {prevPage ? (
              <IconButton href={prevPage.href}>
                <ArrowBackIosNewIcon />
              </IconButton>
            ) : (
              <ReturnButton
                sx={{
                  ...(buttonVariant == "contained" && {
                    bgcolor: "grey.200",
                  }),
                }}
              />
            )}
          </Toolbar>
        </AppBar>
        {!disableTopGutter && <Toolbar sx={{ display: { md: "none" } }} />}
      </Box> */}

      {/* )} */}
      <MainContainer
        sx={{
          pt: { xs: 0, md: 8 },
          pb: 0,
          position: "relative",
          ...props.sx,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: "appBar",
            m: 2,
            display: { xs: "initial", md: "none" },
          }}
        >
          {prevPage ? (
            <IconButton
              href={prevPage.href}
              sx={{
                ...(buttonVariant == "contained" && {
                  bgcolor: "common.white",
                }),
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          ) : (
            <ReturnButton
              sx={{
                ...(buttonVariant == "contained" && {
                  bgcolor: "common.white",
                }),
              }}
            />
          )}
        </Box>
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
      </MainContainer>
    </>
  );
};

export default SubPageLayout;
