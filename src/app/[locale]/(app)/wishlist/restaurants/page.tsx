import { getRestaurants } from "@/actions/restaurants/getRestaurants";
import { routes } from "@/constants/routes";
import { Grid2 } from "@mui/material";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"), {
  ssr: true,
});

const NavTabs = dynamic(
  () => import("@/components/common/navigation/NavTabs"),
  { ssr: true }
);

const RestaurantCard = dynamic(
  () => import("@/components/custom/restaurant/RestaurantCard"),
  { 
    ssr: true,
    loading: () => <div>Loading...</div>
  }
);

const Home: NextPage = async () => {
  const { data: restaurants } = await getRestaurants();
  
  return (
    <MainLayout activeTab="wishlist">
      <NavTabs
        textColor="primary"
        links={[
          { label: "restaurants", url: `${routes.WISHLIST}/restaurants` },
          { label: "plates", url: `${routes.WISHLIST}/plates` },
        ]}
        active={0}
      />
      <Grid2 container spacing={2} mt={2}>
        {restaurants.slice(0, 10).map((restaurant) => (
          <Grid2 key={restaurant.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <RestaurantCard restaurant={restaurant} />
          </Grid2>
        ))}
      </Grid2>
    </MainLayout>
  );
};

export default Home;
