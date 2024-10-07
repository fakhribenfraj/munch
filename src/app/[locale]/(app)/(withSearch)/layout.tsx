import FixedBottomNavigation from "@/components/common/navigation/FixedBottomNavigation";
import ResponsiveAppBar from "@/components/common/ResponsiveAppBar";
import { Container } from "@mui/material";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResponsiveAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          height: "100%",
          width: "100%",
          pt: 14,
          pb: 7,
        }}
      >
        {children}
      </Container>
      <FixedBottomNavigation showMapLink />
    </>
  );
}
