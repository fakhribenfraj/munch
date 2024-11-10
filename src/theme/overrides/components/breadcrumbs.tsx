import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export function breadcrumbs(theme: Theme) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
        /* This block of code is defining the styles for the list items (`li`) within the
        `MuiBreadcrumbs` component. Here's what each part is doing: */
        li: {
          display: "inline-flex",
          margin: theme.spacing(0.25, 0),
          textTransform: "capitalize",
          "& > *": {
            fontWeight: theme.typography.fontWeightMedium,
          },
        },
      },
    },
  };
}
