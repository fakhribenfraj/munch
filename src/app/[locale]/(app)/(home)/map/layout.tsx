import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import ResponsiveAppBar from "@/components/custom/ResponsiveAppBar";
import MapView from "@/components/screens/home/views/MapView";
import { Box } from "@mui/material";
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
          pt: { xs: 14, sm: 16 },
        }}
      >
        <MapView restaurants={restaurants} />
      </Box>

      <ViewChangeButton isMapView={true} />
    </>
  );
}
