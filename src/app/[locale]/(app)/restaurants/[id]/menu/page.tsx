import { getRestaurantMenuById } from "@/actions/restaurants/getRestaurantMenuById";
import RestaurantNavTabs from "@/components/custom/restaurant/RestaurantNavTabs";
import { Stack } from "@mui/material";
import dynamic from "next/dynamic";
const FoodCategory = dynamic(
  () => import("@/components/custom/restaurant/FoodCategory")
);
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: menu } = await getRestaurantMenuById(id);
  return (
    <Stack spacing={2}>
      <RestaurantNavTabs id={id} active="menu" showSearchBar />
      <Stack spacing={4}>
        {menu.map((category, index) => (
          <FoodCategory category={category} key={index} />
        ))}
      </Stack>
    </Stack>
  );
}
