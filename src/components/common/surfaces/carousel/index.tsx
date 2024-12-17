"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Fab, SxProps, Theme, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import Slider, { Settings as SlickSettings } from "react-slick";
import Arrow from "./Arrow";
import Dots from "./Dots";
import Paging from "./Paging";
type CarouselProps = SlickSettings & {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  ref?: React.RefObject<HTMLDivElement>;
  sx?: SxProps<Theme>;
};
const Carousel = ({
  ref,
  children,
  width,
  height,
  sx,
  ...settings
}: CarouselProps) => {
  const theme = useTheme();

  const defaultSettings: SlickSettings = {
    dots: true,
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
      ref={ref}
      sx={{
        width: "100%",
        maxWidth: width,
        height: "100%",
        maxHeight: height,
        "& .slick-arrow": {
          display: "none",
        },
        "& .slick-dots": {
          bottom: 0,
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
        {children}
      </Slider>
    </Box>
  );
};

export default Carousel;
