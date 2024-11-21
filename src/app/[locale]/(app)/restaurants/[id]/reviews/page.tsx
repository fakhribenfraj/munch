import { getRestaurantById } from "@/actions/restaurants/getRestaurantById";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { Stack, Typography } from "@mui/material";
import { headers } from "next/headers";
import { getSubpages } from "../layout";
import NavTabs from "@/components/common/navigation/NavTabs";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: restaurant } = await getRestaurantById(id);

  return (
    <Stack gap={2}>
      {" "}
      <NavTabs textColor="primary" links={getSubpages(id)} active={2} />
      reviews
    </Stack>
  );
}
