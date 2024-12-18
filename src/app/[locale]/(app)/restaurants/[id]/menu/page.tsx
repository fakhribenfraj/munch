import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import { getRestaurantMenuById } from "@/actions/restaurants/getRestaurantMenuById";
import FoodCategory from "@/components/custom/restaurant/FoodCategory";
import RestaurantNavTabs from "@/components/custom/restaurant/RestaurantNavTabs";
import Searchbar from "@/components/filters/Searchbar";
import { Stack, Toolbar } from "@mui/material";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: menu } = await getRestaurantMenuById(id);
  return (
    <Stack spacing={1}>
      <RestaurantNavTabs id={id} active="menu" showSearchBar />
      <Stack spacing={4}>
        {menu.map((category, index) => (
          <FoodCategory category={category} key={index} />
        ))}
      </Stack>
    </Stack>
  );
}
