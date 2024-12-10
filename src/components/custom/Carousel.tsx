"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Fab } from "@mui/material";
import React, { ReactNode } from "react";
import Slider, { Settings as SlickSettings } from "react-slick";
type CarouselProps = SlickSettings & {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  ref?: React.RefObject<HTMLDivElement>;
};
const Carousel = ({
  ref,
  children,
  width,
  height,
  ...settings
}: CarouselProps) => {
  const Arrow = ({
    onClick,
    variant,
  }: {
    onClick?: () => void;
    variant: "next" | "prev";
  }) => {
    return (
      <Fab
        size="small"
        color="default"
        className={`arrow ${variant}`}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: variant === "next" ? 0 : undefined,
          left: variant === "prev" ? 0 : undefined,
          m: 1,
        }}
        onClick={onClick}
      >
        {variant === "next" ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
      </Fab>
    );
  };

  const defaultSettings: SlickSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow variant="next" />,
    prevArrow: <Arrow variant="prev" />,
  };
  const props = { ...defaultSettings, ...settings };
  const slidesCount = React.Children.count(children);
  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        maxWidth: width,
        mb: 2,
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
