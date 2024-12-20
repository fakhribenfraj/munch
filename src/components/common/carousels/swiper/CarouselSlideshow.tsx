"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperProps } from "swiper/react";
import Carousel, { CarouselProps } from "./Carousel";
import { Stack } from "@mui/material";
type CarouselSlideshowProps = CarouselProps & {
  children: React.ReactNode;
};
export default function CarouselSlideshow({
  children,
  sx,
  ...props
}: CarouselSlideshowProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <Stack spacing={1} sx={sx}>
      <Carousel
        spaceBetween={16}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        {...props}
      >
        {children}
      </Carousel>
      <Carousel
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        sx={{
          "& .swiper-slide": {
            filter: "grayscale(100%)",
            transform: "scale(0.9)",
          },
          "& .swiper-slide-thumb-active": {
            filter: "grayscale(0%)",
            transform: "scale(1)",
          },
        }}
      >
        {children}
      </Carousel>
    </Stack>
  );
}
