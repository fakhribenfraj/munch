import { routes } from "@/constants/routes";
import { Container } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  if (session) {
    redirect(routes.HOME);
  }

  return <Container maxWidth="sm">{children}</Container>;
}
