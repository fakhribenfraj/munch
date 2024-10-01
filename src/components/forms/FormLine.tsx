import { Grid, GridProps, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type FormLineProps = GridProps & {
  label: string;
  children: ReactNode;
};
const FormLine = ({ label, children, ...gridProps }: FormLineProps) => {
  return (
    <Grid container {...gridProps}>
      <Grid
        item
        container
        xs={3}
        sx={{
          alignItems: "flex-start",
          justifyContent: "flex-end",
          textAlign: "right",
          paddingRight: 4,
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "grey.600",
          }}
        >
          {label}
        </Typography>
      </Grid>
      <Grid item container xs={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default FormLine;
