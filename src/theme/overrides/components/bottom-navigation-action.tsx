import { Theme } from "@mui/material/styles";
import Link from "next/link";

// ----------------------------------------------------------------------

export function bottomNavigationAction(theme: Theme) {
  return {
    MuiTab: {
      defaultProps: {
        component: Link,
      },
    },
  };
}
