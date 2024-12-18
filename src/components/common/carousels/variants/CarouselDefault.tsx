"use client";
import { Box, SxProps, Theme } from "@mui/material";
import React, { ReactNode, useRef } from "react";
import Slider, { Settings as SlickSettings } from "react-slick";
import Arrow from "../components/Arrow";
import Dots from "../components/Dots";
import Paging from "../components/Paging";

export type CarouselDefaultProps = SlickSettings & {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  spacing?: number;
  sx?: SxProps<Theme>;
  ref?: React.RefObject<Slider>;
};
const CarouselDefault = ({
  children,
  width,
  height,
  sx,
  spacing = 0,
  ...settings
}: CarouselDefaultProps) => {
  const defaultSettings: SlickSettings = {
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow variant="next" />,
    prevArrow: <Arrow variant="prev" />,
    appendDots: (dots) => <Dots>{dots}</Dots>,
    customPaging: (i) => <Paging index={i} />,
  };
  const props = { ...defaultSettings, ...settings };
  const slidesCount = React.Children.count(children);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: width,
        height: "100%",
        maxHeight: height,
        "& .slick-arrow": {
          display: "none",
        },
        "&:hover .slick-arrow": {
          display: { md: "flex" },
        },
        ...sx,
      }}
    >
      <Slider
        {...props}
        infinite={
          slidesCount >= (props?.slidesToShow ?? 1) ? props.infinite : false
        }
      >
        {React.Children.map(children, (child) => (
          <Box sx={{ px: spacing }}>{child}</Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselDefault;
