import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type ResponsiveValue<T> = T | { xs?: T; sm?: T; md?: T; lg?: T; xl?: T };

const useResponsive = <T>(
  value: ResponsiveValue<T> | undefined,
  defaultValue: T
): T => {
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isXLargeDesktop = useMediaQuery(theme.breakpoints.up("xl"));

  let currentValue: T = defaultValue;

  // Type narrowing: Check if value is an object with responsive keys
  if (value === undefined) {
    return defaultValue;
  }
  if (typeof value === "object" && value !== null) {
    if (isSmallMobile && "xs" in value && value.xs !== undefined) {
      currentValue = value.xs;
    }
    if (isTablet && "sm" in value && value.sm !== undefined) {
      currentValue = value.sm;
    }
    if (isDesktop && "md" in value && value.md !== undefined) {
      currentValue = value.md;
    }
    if (isLargeDesktop && "lg" in value && value.lg !== undefined) {
      currentValue = value.lg;
    }
    if (isXLargeDesktop && "xl" in value && value.xl !== undefined) {
      currentValue = value.xl;
    }
  } else {
    currentValue = value; // If value is not an object, use it as-is
  }

  return currentValue;
};

export default useResponsive;
