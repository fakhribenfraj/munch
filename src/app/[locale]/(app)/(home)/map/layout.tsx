import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import MainContainer from "@/components/common/surfaces/MainContainer";
import ResponsiveAppBar from "@/components/custom/ResponsiveAppBar";
import MapView from "@/components/screens/home/views/MapView";
import { routes } from "@/constants/routes";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Box, Fab, Link, Stack } from "@mui/material";
import { getTranslations } from "next-intl/server";
import ViewChangeButton from "../ViewChangeButton";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = await getTranslations();
  const { data: restaurants } = await getRestaurants();

  return (
    <>
      <ResponsiveAppBar />
      <Box
        component="main"
        sx={{
          height: "100%",
          width: "100%",
          pt: { xs: 15, sm: 17 },
        }}
      >
        <MapView restaurants={restaurants} />
      </Box>

      <ViewChangeButton isMapView={true} />
    </>
  );
}
