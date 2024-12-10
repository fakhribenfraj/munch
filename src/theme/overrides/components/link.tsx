import { Theme } from "@mui/material/styles";
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";

// ----------------------------------------------------------------------
// const NextLink = forwardRef<HTMLAnchorElement, LinkProps>(function NextLink(
//   props,
//   ref
// ) {
//   return <Link ref={ref} {...props} />;
// });
export function link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        // component: NextLink,
        underline: "none",
        color: "inherit",
      },
    },
  };
}
