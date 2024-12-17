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
    <Stack spacing={2}>
      {/* Category Title */}
      <Typography variant="h6" fontWeight="bold">
        {category.title}
      </Typography>

      {/* Food Items Grid */}
      <ShowMore slidesToShow={{ xs: 2, sm: 3, md: 5 }}>
        {category.items.map((item, idx) => (
          <Box key={idx} p={1}>
            <PlateCard
              id={item.id}
              title={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          </Box>
        ))}
      </ShowMore>
    </Stack>
  );
};

export default FoodCategory;
