import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import MainContainer from "@/components/common/surfaces/MainContainer";
import SwitchViewButton from "@/components/custom/SwitchViewButton";
import MapView from "@/components/screens/home/views/MapView";

import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
const Home: NextPage = async () => {
  const { data: restaurants } = await getRestaurants();
  const t = await getTranslations();
  return (
    <>
      <MainContainer
        sx={{
          pt: { xs: 15, sm: 17 },
          pb: 0,
          px: { xs: 0 },
        }}
      >
        <MapView restaurants={restaurants} />
      </MainContainer>
      <SwitchViewButton variant="list" />
    </>
  );
};
export default Home;
