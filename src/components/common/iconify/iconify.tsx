import { forwardRef } from "react";
import { Icon } from "@iconify/react";

import Box, { BoxProps } from "@mui/material/Box";

import { IconifyProps } from "./types";

// ----------------------------------------------------------------------

type Props = BoxProps & {
  size?: number;
  component?: React.ElementType;
  icon: IconifyProps;
};

const Iconify = forwardRef<SVGElement, Props>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);
Iconify.displayName = "Iconify";
export default Iconify;
