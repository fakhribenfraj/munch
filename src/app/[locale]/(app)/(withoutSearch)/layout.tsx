import FixedBottomNavigation from "@/components/common/navigation/FixedBottomNavigation";
import ResponsiveAppBar from "@/components/common/ResponsiveAppBar";
import {
  Container
} from "@mui/material";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container maxWidth="xl" disableGutters>
      <ResponsiveAppBar hideSearchField/>
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          pb: 7,
        }}
      >
        {children}
      </Container>
      <FixedBottomNavigation />
    </Container>
  );
}
