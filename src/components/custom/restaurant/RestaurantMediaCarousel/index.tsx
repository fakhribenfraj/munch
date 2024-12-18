"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import {
  default as Carousel,
  default as CarouselDefault,
} from "../../../common/carousels/variants/CarouselDefault";
import "./restaurant.css";
type RestaurantMediaCarouselProps = {
  itemData: {
    img: string;
    title: string;
  }[];
};
const RestaurantMediaCarousel = ({
  itemData,
}: RestaurantMediaCarouselProps) => {
  return (
    <CarouselDefault
      // autoplay
      autoplaySpeed={2000}
      infinite
    >
      {itemData.map((item) => (
        <Box
          key={item.title}
          sx={{
            mx: 1,
            position: "relative",
            width: "100%",
            height: 200,
            overflow: "hidden",
          }}
        >
          <Image
            key={item.title}
            fill
            src={`${item.img}?w=${400}&h=${200}&fit=crop&auto=format`}
            alt={item.title}
          />
        </Box>
      ))}
    </CarouselDefault>
  );
};

export default RestaurantMediaCarousel;
