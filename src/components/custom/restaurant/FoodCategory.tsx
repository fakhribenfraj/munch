import PlateCard from "@/components/custom/plate/PlateCard";
import AccordionCarousel from "@/components/common/AccordionCarousel";

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
    <AccordionCarousel
      slidesToShow={{ xs: 2, sm: 3, md: 5 }}
      spacing={1}
      title={category.title}
    >
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
  );
};

export default FoodCategory;
