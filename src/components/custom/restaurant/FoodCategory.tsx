import ShowMore from "@/components/common/ShowMore";
import PlateCard from "@/components/custom/plate/PlateCard";
import { Box, Stack, Typography } from "@mui/material";

interface FoodCategoryProps {
  category: {
    title: string;
    items: {
      id: string;
      name: string;
      price: number;
      rating: number;
      image: string;
    }[];
  };
}

const FoodCategory = ({ category }: FoodCategoryProps) => {
  return (
    <ShowMore slidesToShow={{ xs: 2, sm: 3, md: 5 }} spacing={1} title={category.title}>
      {category.items.map((item, idx) => (
        <PlateCard
          key={idx}
          id={item.id}
          title={item.name}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </ShowMore>
  );
};

export default FoodCategory;
