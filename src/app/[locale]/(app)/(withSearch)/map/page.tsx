import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import MapScreen from "@/components/screens/MapScreen";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const { data: restaurants } = await getRestaurants();
  return (
    <MapScreen
      mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN ?? ""}
      restaurants={restaurants}
    />
  );
};
export default Home;
