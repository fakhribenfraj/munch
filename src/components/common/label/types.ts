import Box, { BoxProps } from "@mui/material/Box";

// ----------------------------------------------------------------------

export type LabelColor =
  | "default"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export type LabelVariant = "filled" | "outlined" | "soft";

export type LabelProps = BoxProps & {
  size?: number;
  component?: React.ElementType;
} & {
  startIcon?: React.ReactElement | null;
  endIcon?: React.ReactElement | null;
  color?: LabelColor;
  variant?: LabelVariant;
};
