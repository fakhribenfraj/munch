import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import routes from "@/constants/routes";
import ForgotPasswordForm from "../forms/auth/ForgotPasswordForm";
import { ReactNode } from "react";
type AuthScreenProps = {
  title: string;
  description: string;
  children: ReactNode;
};
export default function ForgotAuthScreen({
  title,
  description,
  children,
}: AuthScreenProps) {
  return (
    <Stack rowGap={3}>
      <Button
        href={routes.SIGNIN}
        disableRipple
        startIcon={<ArrowBackIcon />}
        sx={{
          alignSelf: "start",
        }}
      >
        Connection
      </Button>
      <Stack>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Stack>
      {children}
    </Stack>
  );
}
