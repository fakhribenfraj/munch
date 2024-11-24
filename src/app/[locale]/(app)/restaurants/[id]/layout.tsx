import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import SafeImage from "@/components/common/image/SafeImage";
import GoogleDirections from "@/components/common/navigation/GoogleDirections";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import { routes } from "@/constants/routes";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

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
  return (
    <SubPageLayout prevPage={{ label: t("EXPLORE"), href: routes.HOME }}>
      <Stack alignItems="flex-start" gap={1}>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100vw", md: "100%" },
            height: {
              xs: "calc(100vw / 3)",
              sm: "calc(100vw / 4)",
              lg: "calc(100vw / 5)",
            },
            mb: 17,
            transform: {
              xs: `translate(-1rem,0)`,
              sm: `translate(-1.5rem,0)`,
              md: "none",
            },
          }}
        >
          <Box
            sx={{
              maxHeight: "100%",
              borderRadius: { md: "0 0 0.5rem 0.5rem" },
              overflow: "hidden",
            }}
          >
            <SafeImage
              fallbackSrc="/assets/images/resto-logo.png"
              src={restaurant.cover}
              width={1488}
              height={333}
              alt="cover"
              priority
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              columnGap: 2,
              alignItems: "center",
              bottom: { md: 0 },
              left: { xs: "50%", md: 0 },
              transform: {
                xs: `translate(-50%,-${logoWidth / 2}px)`,
                md: "translate(1.5rem,80%)",
              },
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Avatar
              src={restaurant.logo}
              sx={{
                width: logoWidth,
                height: logoWidth,
                boxShadow: 2,
                outline: "4px solid white",
              }}
            />
            <Stack spacing={2} marginTop={{ xs: 0, md: 4 }}>
              <Box>
                <Typography variant="h4">{restaurant?.name}</Typography>
                <Typography variant="body2">
                  {restaurant?.delegation}
                </Typography>
              </Box>
              <GoogleDirections lat={restaurant.lat} lng={restaurant.lng} />
            </Stack>
          </Box>
        </Box>
      </Stack>

      {children}
    </SubPageLayout>
  );
}
