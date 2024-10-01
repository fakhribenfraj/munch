import { getSidebarLinks } from "@/actions/authorization/userConfigs";
import ResponsiveAppBar from "@/components/common/ResponsiveAppBar";
import SideBar from "@/components/common/SideBar";
import routes from "@/constants/routes";
import { Container, Grid, Toolbar } from "@mui/material";
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
  const menuLinks = await getSidebarLinks();

  return <Container maxWidth="sm">{children}</Container>;
}
