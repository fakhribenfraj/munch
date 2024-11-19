import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import NavTabs from "@/components/common/navigation/NavTabs";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import { routes } from "@/constants/routes";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import { headers } from "next/headers";
import Image from "next/image";
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;

  const { data: restaurant } = await getRestaurantById(id);
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");
  return (
    <SubPageLayout disableTopGutter buttonVariant="contained">
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
            mb: { xs: 3, md: 6 },
            transform: {
              xs: `translate(-1rem,0)`,
              sm: `translate(-1.5rem,0)`,
              md: "none",
            },
          }}
        >
          <Image
            src={restaurant.cover}
            width={1488}
            height={333}
            style={{ maxHeight: "100%" }}
            alt="cover"
            priority
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              transform: "translate(1.5rem,50%)",
              boxShadow: 2,
              width: { xs: 48, md: 80 },
              height: { xs: 48, md: 80 },
            }}
          >
            <Image
              src={restaurant.logo}
              width={80}
              height={80}
              style={{ maxHeight: "100%" }}
              alt="logo"
              priority
            />
          </Box>
        </Box>
        <Typography variant="h4">{restaurant?.name}</Typography>
        <Button variant="outlined">add to favorite</Button>
      </Stack>
      {pathname && (
        <NavTabs
          textColor="primary"
          links={[
            { label: "Overview", url: `${routes.RESTAURANTS}/${id}` },
            { label: "Menu", url: `${routes.RESTAURANTS}/${id}/menu` },
            { label: "Reviews", url: `${routes.RESTAURANTS}/${id}/reviews` },
            { label: "Contact", url: `${routes.RESTAURANTS}/${id}/contact` },
          ]}
          pathname={pathname}
        />
      )}
      {children}
    </SubPageLayout>
  );
}
