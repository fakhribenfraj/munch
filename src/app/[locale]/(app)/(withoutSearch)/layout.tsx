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
      <ResponsiveAppBar hideSearchField />
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          pt: 2,
          pb: 7,
        }}
      >
        {children}
      </Container>
      <FixedBottomNavigation />
    </>
  );
}
