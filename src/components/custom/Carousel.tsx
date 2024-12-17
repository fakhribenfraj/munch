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
  align?: "left" | "center" | "right";
};
const Carousel = ({
  ref,
  children,
  width,
  height,
  align = "center",
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
        className={`slick-arrow arrow-${variant}`}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: variant === "next" ? 0 : undefined,
          left: variant === "prev" ? 0 : undefined,
          m: 2,
          boxShadow: 2,
          backgroundColor: "common.white",
          border: "1px solid",
          borderColor: "grey.300",
        }}
        onClick={onClick}
      >
        {variant === "next" ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
      </Fab>
    );
  };

  const defaultSettings: SlickSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        mb: props.dots ? 2 : 0,
        height: "100%",
        maxHeight: height,
        "& .slick-arrow": {
          display: "none",
        },
        "& .slick-track": {
          ml: align === "left" ? 0 : "auto",
          mr: align === "right" ? 0 : "auto",
        },
        "&:hover .slick-arrow": {
          display: { md: "flex" },
        },
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
