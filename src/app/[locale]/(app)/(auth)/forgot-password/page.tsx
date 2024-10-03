import ForgotPasswordForm from "@/components/forms/auth/ForgotPasswordForm";
import ForgotAuthScreen from "@/components/screens/ForgotAuthScreen";

export default function Page() {
  return (
    <ForgotAuthScreen
      title="Forgot password"
      description="Please enter your email to reset the password."
    >
      <ForgotPasswordForm />
    </ForgotAuthScreen>
  );
}
