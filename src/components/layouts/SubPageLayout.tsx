import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Breadcrumbs,
  ContainerProps,
  IconButton,
  Link,
  Typography
} from "@mui/material";
import { ReactNode } from "react";
import ReturnButton from "../common/navigation/ReturnButton";
import MainContainer from "../common/surfaces/MainContainer";
import ResponsiveAppBar from "../custom/ResponsiveAppBar";

type SubPageLayoutProps = ContainerProps & {
  children: ReactNode;
  disableTopGutter?: boolean;
  buttonVariant?: "contained" | "text";
  breadcrumbs?: { label: string; href: string }[];
  prevPage?: { label: string; href: string };
  disablePadding?: boolean;
};
const SubPageLayout = ({
  children,
  disableTopGutter,
  buttonVariant,
  breadcrumbs,
  prevPage,
  disablePadding,
  ...props
}: SubPageLayoutProps) => {
  return (
    <>
      <ResponsiveAppBar hideSearchField />
      <MainContainer
        sx={{
          pt: { xs: 0, md: 8 },
          pb: 0,
          position: "relative",
          ...props.sx,
        }}
        disablePadding={disablePadding}
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
