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

  if (!session) {
    redirect(routes.SIGNIN);
  }
  const menuLinks = await getSidebarLinks();

  return (
    <>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          height: "100vh",
          width: "100vw",
          overflowY: "hidden",
          boxShadow: 3,
        }}
      >
        <ResponsiveAppBar />
        <Toolbar />
        <Grid container sx={{ height: "100%" }}>
          <Grid
            item
            xs={2}
            sx={{
              zIndex: 1,
            }}
          >
            <SideBar menuLinks={menuLinks} />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              p: 2,
              pb: 6,
              backgroundColor: "common.white",
              height: "calc(100% - 4rem)",
              overflowY: "auto",
            }}
          >
            <Container maxWidth="lg" component="main">
              {children}
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
