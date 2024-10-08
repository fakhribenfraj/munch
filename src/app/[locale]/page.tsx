import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import HomeScreen from "@/components/screens/home/HomeScreen";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const { data: restaurants } = await getRestaurants();
  return <HomeScreen restaurants={restaurants} />;
};
export default Home;
