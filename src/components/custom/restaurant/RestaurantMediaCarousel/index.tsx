"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import Carousel from "../../../common/carousels/variants/CarouselDefault";
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
    <Carousel
      // autoplay
      dots
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
    </Carousel>
  );
};

export default RestaurantMediaCarousel;
