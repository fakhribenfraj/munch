import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Breadcrumbs,
  ContainerProps,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import ReturnButton from "../common/navigation/ReturnButton";
import MainContainer from "../common/surfaces/MainContainer";
import ResponsiveAppBar from "../custom/ResponsiveAppBar";

type SubPageLayoutProps = ContainerProps & {
  children: ReactNode;
  disableTopGutter?: boolean;
  buttonVariant?: "contained" | "text";
  possiblePrevLinks?: string[];
  breadcrumbLinks?: { label: string; href: string }[];
  disablePadding?: boolean;
  returnVariant?: "fixed" | "absolute";
};
const SubPageLayout = ({
  children,
  disableTopGutter,
  buttonVariant,
  possiblePrevLinks,
  breadcrumbLinks,
  disablePadding,
  returnVariant = "fixed",
  ...props
}: SubPageLayoutProps) => {
  return (
    <>
      <ResponsiveAppBar
        hideSearchField
        backButton={
          returnVariant == "fixed" && possiblePrevLinks? (
            <ReturnButton possiblePrevLinks={possiblePrevLinks} />
          ) : undefined
        }
      />
      <MainContainer
        sx={{
          pb: 0,
          position: "relative",
          ...(returnVariant == "absolute" && {
            pt: { xs: 0, md: 8 },
          }),
          ...props.sx,
        }}
        disablePadding={disablePadding}
      >
        {returnVariant == "absolute" && (
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
            <ReturnButton possiblePrevLinks={possiblePrevLinks} />
          </Box>
        )}
        {breadcrumbLinks && breadcrumbLinks.length > 1 && (
          <Box sx={{ mb: 4 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{
                display: { xs: "none", md: "initial" },
              }}
            >
              {breadcrumbLinks?.map((item, index) =>
                index == breadcrumbLinks.length - 1 ? (
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
