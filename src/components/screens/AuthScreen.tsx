import SignInForm from "@/components/forms/auth/SignInForm";
import { Button, Divider, Stack, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import routes from "@/constants/routes";
import RegisterForm from "../forms/auth/RegisterForm";
type AuthScreenProps = {
  title: string;
  description: string;
  isRegister?: boolean;
};
export default function AuthScreen({
  title,
  description,
  isRegister,
}: AuthScreenProps) {
  return (
    <Stack
      sx={{
        rowGap: { xs: 2, md: 3 },
        my: 4,
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Stack rowGap={{ xs: 4, md: 6 }}>
        <Stack
          sx={{
            rowGap: { xs: 4, md: 6 },
          }}
        >
          <Typography variant="h2">MUNCH</Typography>
          <Stack>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </Stack>
        </Stack>
        {isRegister ? <RegisterForm /> : <SignInForm />}
      </Stack>
      <Divider>OR</Divider>
      <Stack direction="row" columnGap={2}>
        {[
          {
            label: "facebook",
            icon: <FacebookIcon />,
          },
          {
            label: "google",
            icon: <GoogleIcon />,
          },
        ].map((social) => (
          <Button
            key={social.label}
            startIcon={social.icon}
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 5,
            }}
          >
            {social.label}
          </Button>
        ))}
      </Stack>
      {isRegister ? (
        <Typography>
          Already have an account ?{" "}
          <Link href={routes.SIGNIN}>
            <b>Login</b>
          </Link>
        </Typography>
      ) : (
        <Typography>
          Don’t have an account ?{" "}
          <Link href={routes.REGISTER}>
            <b>Sign Up</b>
          </Link>
        </Typography>
      )}
    </Stack>
  );
}
