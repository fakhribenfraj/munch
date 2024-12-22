"use client";
import useResponsive from "@/hooks/useResponsive";
import { Box, Collapse, Grid2, IconButton } from "@mui/material";
import { Children, useRef, useState } from "react";
import ArrowsDownIconOutlined from "../../icons/outlined/ArrowsDown";
import Carousel, { CarouselProps } from "./Carousel";

type AccordionCarouselProps = Omit<CarouselProps, "slidesPerView"> & {
  children: React.ReactNode;
  slidesPerView?: number | { xs?: number; sm?: number; md?: number };
  spacing?: number;
};

const AccordionCarousel = ({
  children,
  slidesPerView = 1,
  spacing = 0,
  ...props
}: AccordionCarouselProps) => {
  const [showingMore, setShowingMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const openedHeight = ref.current?.offsetTop ?? 0;
  let currentSlidesToShow = useResponsive<number>(slidesPerView, 1);

  const isCarousel = Children.count(children) > currentSlidesToShow;

  console.log(props.breakpoints);
  return (
    <Box ref={ref}>
      <Collapse in={showingMore} timeout="auto" collapsedSize={210}>
        {isCarousel && !showingMore && (
          <Carousel
            slidesPerView={currentSlidesToShow + 0.2}
            spaceBetween={spacing * 8}
            {...props}
          >
            {children}
          </Carousel>
        )}
        {(showingMore || !isCarousel) && (
          <Grid2 container ref={ref} spacing={spacing}>
            {Children.map(children, (child, idx) => (
              <Grid2 size={12 / currentSlidesToShow} key={idx}>
                {child}
              </Grid2>
            ))}
          </Grid2>
        )}
      </Collapse>
      {isCarousel && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            sx={{
              display: "block",
            }}
            onClick={() => {
              if (showingMore) {
                document?.querySelector("main")?.scroll({
                  top: openedHeight - 112,
                  behavior: "smooth",
                });
              }
              setShowingMore((state) => !state);
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                transform: showingMore ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <ArrowsDownIconOutlined />
            </Box>
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default AccordionCarousel;
