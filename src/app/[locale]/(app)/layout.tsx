import FixedBottomNavigation from "@/components/common/navigation/FixedBottomNavigation";
import HideOnScroll from "@/components/common/navigation/HideOnScroll";
import ResponsiveAppBar from "@/components/common/ResponsiveAppBar";
import MainContainer from "@/components/common/surfaces/MainContainer";
import { Box } from "@mui/material";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResponsiveAppBar hideSearchField />
      <MainContainer>{children}</MainContainer>
      <HideOnScroll direction="up">
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            left: 0,
            width: "100%",
          }}
        >
          <FixedBottomNavigation />
        </Box>
      </HideOnScroll>
    </>
  );
}
