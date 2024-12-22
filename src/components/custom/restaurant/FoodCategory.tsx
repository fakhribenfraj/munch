import PlateCard from "@/components/custom/plate/PlateCard";
import AccordionCarousel from "@/components/common/AccordionCarousel";
import { Stack, Typography } from "@mui/material";

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
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight="bold">
        {category.title}
      </Typography>
      <AccordionCarousel spacing={1} slidesPerView={{ xs: 2, sm: 3, md: 5 }}>
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
      </AccordionCarousel>
    </Stack>
  );
};

export default FoodCategory;
