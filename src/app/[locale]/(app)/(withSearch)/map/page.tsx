import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import MapScreen from "@/components/screens/MapScreen";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const { data: restaurants } = await getRestaurants();
  return (
    <MapScreen restaurants={restaurants}/>
  );
};
export default Home;
