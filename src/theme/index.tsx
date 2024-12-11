// src/theme/index.tsx

"use client";

import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";
import { useMemo } from "react";
import { customShadows } from "./custom-shadows";
import NextAppDirEmotionCacheProvider from "./next-emotion-cache";
import { componentsOverrides } from "./overrides";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";
import { zIndex } from "./zIndex";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () => ({
      palette: palette("light"), // or palette('dark')
      shadows: shadows("light"), // or shadows('dark')
      customShadows: customShadows("light"), // or customShadows('dark')
      shape: { borderRadius: 8 },
      typography,
      zIndex,
    }),
    []
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = componentsOverrides(theme);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
