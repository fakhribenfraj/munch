"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import CarouselDefault, { CarouselDefaultProps } from "../../default";
import { Box, Stack } from "@mui/material";
import useResponsive from "@/hooks/useResponsive";

export type CarouselSlideshowProps = CarouselDefaultProps & {};
const CarouselSlideshow = ({
  spacing = 0,
  children,
  ...props
}: CarouselSlideshowProps) => {
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  return (
    <Stack>
      <CarouselDefault
        ref={sliderRef1}
        asNavFor={sliderRef2.current ?? undefined}
        spacing={spacing}
        dots={false}
        {...props}
      >
        {children}
      </CarouselDefault>
      <CarouselDefault
        ref={sliderRef2}
        asNavFor={sliderRef1.current ?? undefined}
        swipeToSlide
        focusOnSelect
        centerMode
        centerPadding="0"
        spacing={0.5}
        dots={false}
        arrows
        slidesToShow={3}
        sx={{
          "& .slick-slide": {
            filter: "grayscale(100%)",
            transform: "scale(0.9)",
            "&.slick-current": {
              filter: "grayscale(0%)",
              transform: "scale(1)",
            },
          },
        }}
      >
        {children}
      </CarouselDefault>
    </Stack>
  );
};

export default CarouselSlideshow;
