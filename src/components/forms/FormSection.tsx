import { Stack, StackProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type FormSectionProps = StackProps & {
  title: string;
  children: ReactNode;
};
const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <Stack rowGap={3}>
      <Typography variant="h6">{title}</Typography>
      <Stack rowGap={2}>{children}</Stack>
    </Stack>
  );
};

export default FormSection;
