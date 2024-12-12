import { Theme } from "@mui/material/styles";
import Link from "next/link";

// ----------------------------------------------------------------------

export function link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        component: Link,
        underline: "none",
        color: "inherit",
      },
    },
  };
}
