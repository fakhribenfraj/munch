import VerifyResetCode from "@/components/forms/auth/VerifyResetCode";
import ForgotAuthScreen from "@/components/screens/ForgotAuthScreen";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { email: string };
}) {
  return (
    <ForgotAuthScreen
      title="Check your email"
      description={`We sent a reset link to ${searchParams?.email} enter 5 digit code that mentioned in the email..`}
    >
      <VerifyResetCode />
    </ForgotAuthScreen>
  );
}
