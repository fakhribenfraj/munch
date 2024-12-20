import { getRestaurantAttachementsById } from "@/actions/restaurants/getRestaurantAttachementsById";
import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import { Grid2, Stack } from "@mui/material";
import dynamic from "next/dynamic";

// Dynamic imports for components
const RestaurantNavTabs = dynamic(
  () => import("@/components/custom/restaurant/RestaurantNavTabs"),
  { ssr: true }
);

const RestaurantInfo = dynamic(
  () => import("@/components/custom/restaurant/RestaurantInfo"),
  { ssr: true }
);

const RestaurantSlideShow = dynamic(
  () => import("@/components/custom/restaurant/RestaurantSlideShow"),
  { ssr: true }
);

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: restaurant } = await getRestaurantById(id);
  const { data: attachments } = await getRestaurantAttachementsById(id);

  return (
    <Stack spacing={2} sx={{ pb: 4 }}>
      <RestaurantNavTabs id={id} active="overview" />
      <Grid2 container spacing={{ xs: 4, md: 6 }}>
        <Grid2 size={{ xs: 12, md: 7 }} p={2}>
          <RestaurantSlideShow attachments={attachments} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <RestaurantInfo restaurant={restaurant} />
        </Grid2>
      </Grid2>
    </Stack>
  );
}
