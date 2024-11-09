import VerifyResetCode from "@/components/forms/auth/VerifyResetCode";
import ForgotAuthScreen from "@/components/screens/ForgotAuthScreen";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ email: string }>;
}) {
  const params = await searchParams;
  return (
    <ForgotAuthScreen
      title="Check your email"
      description={`We sent a reset link to ${params?.email} enter 5 digit code that mentioned in the email..`}
    >
      <VerifyResetCode />
    </ForgotAuthScreen>
  );
}
