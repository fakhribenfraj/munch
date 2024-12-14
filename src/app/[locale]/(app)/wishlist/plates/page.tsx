import NavTabs from "@/components/common/navigation/NavTabs";
import PlateCard from "@/components/custom/plate/PlateCard";
import MainLayout from "@/components/layouts/MainLayout";
import { routes } from "@/constants/routes";
import { Grid2 } from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const img =
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=140&fit=crop&auto=format";
  const plates = [
    {
      title: "Ramen Noodles",
      price: 15.0,
      image: img,
    },
    {
      title: "Pho Noodles",
      price: 20.0,
      image: img,
    },
    {
      title: "Ramen Noodles",
      price: 15.0,
      image: img,
    },
    {
      title: "Pho Noodles",
      price: 20.0,
      image: img,
    },
    {
      title: "Ramen Noodles",
      price: 15.0,
      image: img,
    },
    {
      title: "Pho Noodles",
      price: 20.0,
      image: img,
    },
  ];
  return (
    <MainLayout activeTab="wishlist">
      <NavTabs
        textColor="primary"
        links={[
          { label: "restaurants", url: `${routes.WISHLIST}/restaurants` },
          { label: "plates", url: `${routes.WISHLIST}/plates` },
        ]}
        active={1}
      />
      <Grid2 container spacing={2} mt={2}>
        {plates.slice(0, 10).map((plate, idx) => (
          <Grid2 key={idx} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <PlateCard
              id={idx.toString()}
              title={plate.title}
              image={plate.image}
              price={plate.price}
              rating={4.9}
            />
          </Grid2>
        ))}
      </Grid2>
    </MainLayout>
  );
};
export default Home;
