import { getSidebarLinks } from "@/actions/authorization/userConfigs";
import { routes } from "@/constants/routes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  if (session) {
    redirect(routes.OVERVIEW);
  }

  return <>{children}</>;
}
