import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import Map from "@/components/common/surfaces/map/Map";
import Marker from "@/components/common/surfaces/map/Marker";
import { Box } from "@mui/material";

import { NextPage } from "next";
const Home: NextPage = async () => {
  const { data: restaurants } = await getRestaurants();
  return (
    <Map>
      {restaurants?.map((restaurant, i) => (
        <Marker
          key={restaurant.id}
          longitude={restaurant.lng}
          latitude={restaurant.lat}
          anchor="bottom"
        >
          <div>{restaurant.name}</div>
        </Marker>
      ))}
    </Map>
  );
};
export default Home;
