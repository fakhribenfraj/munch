"use client";
import Slider, { Settings as SlickSettings } from "react-slick";
import React, { ReactNode } from "react";
import { Box } from "@mui/material";

type CarouselProps = SlickSettings & {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
};
const Carousel = ({ children, width, height, ...settings }: CarouselProps) => {
  const defaultSettings: SlickSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const props = { ...defaultSettings, ...settings };
  const slidesCount = React.Children.count(children);
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 280,
        maxWidth: width,

        minHeight: 200,
        height: "100%",
        maxHeight: height,
      }}
    >
      <Slider
        {...props}
        infinite={
          slidesCount >= (props?.slidesToShow ?? 1) ? props.infinite : false
        }
      >
        {children}
      </Slider>
    </Box>
  );
};

export default Carousel;
