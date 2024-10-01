import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export function link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: "none",
        color: "inherit",
      },
    },
  };
}
