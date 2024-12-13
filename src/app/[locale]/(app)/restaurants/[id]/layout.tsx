import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import SafeImage from "@/components/common/image/SafeImage";
import GoogleDirections from "@/components/common/navigation/GoogleDirections";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import { routes } from "@/constants/routes";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import StarIcon from "@mui/icons-material/Star";
import { getRestaurants } from "@/actions/restaurants/getRestaurants";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const t = await getTranslations();
  const { data: restaurant } = await getRestaurantById(id);
  const logoWidth = 144;

  const calcCoverHeight = (offset: string = "0px") => {
    const coverHeight = {
      xs: "100vw / 2.5",
      sm: "100vw / 4",
      lg: "100vw / 5",
    };
    return Object.fromEntries(
      Object.entries(coverHeight).map((item) => [
        item[0],
        `calc((${item[1]}) + ${offset})`,
      ])
    );
  };
  return (
    <SubPageLayout
      prevPage={{ label: t("EXPLORE"), href: routes.HOME }}
      buttonVariant="contained"
    >
      <Stack alignItems="flex-start" mb={3}>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100vw", md: "100%" },
            height: calcCoverHeight(),
            maxHeight: 333,
            transform: {
              xs: `translate(-1rem,0)`,
              sm: `translate(-1.5rem,0)`,
              md: "none",
            },
            borderRadius: { md: "0 0 0.5rem 0.5rem" },
            overflow: "hidden",
          }}
        >
          <SafeImage
            fallbackSrc="/assets/images/resto-logo.png"
            src={restaurant?.cover}
            fill
            alt="cover"
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
        <Box
          sx={{
            mt: { xs: -9, md: -4 },
            mx: { xs: "auto", md: 4 },
            display: "flex",
            columnGap: 2,
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "start" },
            position: "relative",
          }}
        >
          <Avatar
            src={restaurant.logo}
            sx={{
              width: logoWidth,
              height: logoWidth,
              boxShadow: 2,
              outline: "4px solid",
              outlineColor: "grey.200",
            }}
          />
          <Stack
            spacing={1.5}
            marginTop={{ xs: 0, md: 4 }}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Box>
              <Typography variant="h4">{restaurant?.name}</Typography>
              <Typography variant="body2">{restaurant?.delegation}</Typography>
            </Box>
            <GoogleDirections lat={restaurant.lat} lng={restaurant.lng} />
          </Stack>
        </Box>
      </Stack>
      {children}
    </SubPageLayout>
  );
}
export async function generateStaticParams() {
  const { data: restaurants } = await getRestaurants();
  return restaurants.map((restaurant) => ({
    id: restaurant.id.toString(),
  }));
}
