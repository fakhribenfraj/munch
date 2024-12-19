"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import React, { ReactNode, useRef } from "react";
import Slider from "react-slick";
import CarouselDefault, { CarouselDefaultProps } from "../default";
import { getElementName } from "@/utils/react";

export type CarouselPaginationProps = Omit<CarouselDefaultProps, "arrows"> & {
  arrows?: {
    position: {
      horizontal: "left" | "right" | "center";
      vertical: "top" | "bottom";
    };
  };
};
const CarouselPagination = ({
  arrows = {
    position: {
      horizontal: "right",
      vertical: "top",
    },
  },
  spacing = 0,
  children,
  ...props
}: CarouselPaginationProps) => {
  let sliderRef = useRef<Slider | null>(null);

 

  const carouselHeader = React.Children.toArray(children).find((child, i) => {
    const childName = getElementName(child);
    return childName === "CarouselHeader";
  });
  const carouselItems = React.Children.toArray(children).filter((child, i) => {
    const childName = getElementName(child);
    return childName !== "CarouselHeader";
  });
  return (
    <Stack
      direction={
        arrows?.position.vertical === "top" ? "column" : "column-reverse"
      }
      alignItems={
        arrows?.position.horizontal === "center"
          ? "center"
          : arrows?.position.horizontal === "right"
          ? "flex-end"
          : "flex-start"
      }
      position="relative"
    >
      <Box sx={{ position: "absolute", top: 0, left: 0, m: spacing }}>
        {carouselHeader}
      </Box>
      <ButtonGroup variant="outlined" color="inherit" sx={{ m: spacing }}>
        <Button onClick={() => sliderRef.current?.slickPrev()}>
          <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
        </Button>
        <Button onClick={() => sliderRef.current?.slickNext()}>
          <ArrowBackIosNewIcon
            sx={{ fontSize: 16, transform: "rotate(180deg)" }}
          />
        </Button>
      </ButtonGroup>

      <CarouselDefault
        arrows={false}
        spacing={spacing}
        ref={sliderRef}
        {...props}
      >
        {carouselItems}
      </CarouselDefault>
    </Stack>
  );
};
const CarouselHeader = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

CarouselHeader.displayName = "CarouselHeader";
CarouselPagination.Header = CarouselHeader;
export default CarouselPagination;
