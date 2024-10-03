import ResponsiveAppBar from "@/components/common/ResponsiveAppBar";
import SideBar from "@/components/common/SideBar";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Grid,
  Paper,
  Toolbar,
} from "@mui/material";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <ResponsiveAppBar />
        <Container
          maxWidth="lg"
          component="main"
          sx={{
            height: "100vh",
            width: "100vw",
            overflowY: "hidden",
            pb: 7,
          }}
        >
          {children}
        </Container>
      </Container>
    </>
  );
}
