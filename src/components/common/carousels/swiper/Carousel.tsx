// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Children } from "react";
import { SwiperOptions } from "swiper/types";
import { Box, SxProps, Theme, useTheme } from "@mui/material";

type CarouselProps = Omit<SwiperOptions, "breakpoints"> & {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  breakpoints?: {
    xs?: SwiperOptions;
    sm?: SwiperOptions;
    md?: SwiperOptions;
    lg?: SwiperOptions;
    xl?: SwiperOptions;
  };
};
const Carousel = ({ children, sx, breakpoints, ...props }: CarouselProps) => {
  const theme = useTheme();
  const muiBreakpoints = theme.breakpoints.values;
  const newBreakpoints =
    breakpoints && Object.keys(breakpoints).length > 0
      ? Object.entries(breakpoints)
          .filter(([_, value]) => value !== undefined)
          .reduce(
            (acc, [key, value]) => ({
              ...acc,
              [muiBreakpoints[key as keyof typeof muiBreakpoints]]: value,
            }),
            {}
          )
      : undefined;
  return (
    <Box
      sx={{
        "--swiper-theme-color": "currentColor",
        "--swiper-pagination-bullet-inactive-color": "currentColor",
        "--swiper-pagination-bullet-inactive-opacity": 0.4,
        ...sx,
      }}
    >
      <Swiper
        pagination={true}
        modules={[Pagination]}
        breakpoints={newBreakpoints}
        spaceBetween={8}
        {...props}
      >
        {Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
