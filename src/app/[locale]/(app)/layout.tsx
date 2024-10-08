import FixedBottomNavigation from "@/components/common/navigation/FixedBottomNavigation";
import ResponsiveAppBar from "@/components/common/ResponsiveAppBar";
import MainContainer from "@/components/common/surfaces/MainContainer";
import { Container } from "@mui/material";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResponsiveAppBar hideSearchField />
      <MainContainer>{children}</MainContainer>
      <FixedBottomNavigation />
    </>
  );
}
