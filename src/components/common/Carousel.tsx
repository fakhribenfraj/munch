"use client";
import Slider, { Settings as SlickSettings } from "react-slick";
import React, { ReactNode } from "react";

type CarouselProps = SlickSettings & {
  children: ReactNode;
};
const Carousel = ({ children, ...settings }: CarouselProps) => {
  const defaultSettings: SlickSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const props = { ...defaultSettings, ...settings };
  const slidesCount = React.Children.count(children);
  return (
    <Slider
      {...props}
      infinite={
        slidesCount >= (props?.slidesToShow ?? 1) ? props.infinite : false
      }
    >
      {children}
    </Slider>
  );
};

export default Carousel;
