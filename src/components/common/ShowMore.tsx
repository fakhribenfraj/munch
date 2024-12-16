"use client";
import Carousel from "@/components/custom/Carousel";
import useResponsive from "@/hooks/useResponsive";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Box, Collapse, Grid2, IconButton } from "@mui/material";
import { Children, useRef, useState } from "react";
import ArrowsDownIconOutlined from "../icons/outlined/ArrowsDown";

interface FoodCategoryProps {
  children: React.ReactNode;
  slidesToShow?: number | { xs?: number; sm?: number; md?: number };
  align?: "left" | "center" | "right";
  autoPlay?: number;
  infinite?: boolean;
}

const ShowMore = ({
  children,
  slidesToShow,
  align,
  autoPlay,
  infinite,
}: FoodCategoryProps) => {
  const [showingMore, setShowingMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  let currentSlidesToShow = useResponsive<number>(slidesToShow, 1);

  const openedHeight = ref.current?.offsetTop ?? 0;
  const isCarousel = Children.count(children) > currentSlidesToShow;
  const triggerButton = (
    <IconButton
      sx={{
        display: "block",
        margin: "auto",
      }}
      onClick={() => {
        if (showingMore) {
          document?.querySelector("main")?.scroll({
            top: openedHeight - 215,
            behavior: "smooth",
          });
        }
        setShowingMore(!showingMore);
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
  );
  return (
    <Box ref={ref}>
      {!showingMore && isCarousel && (
        <Carousel
          slidesToShow={currentSlidesToShow * 1.1}
          arrows={false}
          dots={false}
          align={align}
          {...(autoPlay !== undefined && {
            autoplay: true,
            autoplaySpeed: autoPlay,
          })}
          infinite={infinite}
        >
          {children}
        </Carousel>
      )}

      <Collapse in={showingMore || !isCarousel} timeout="auto">
        <Grid2 container ref={ref}>
          {Children.map(children, (child, idx) => (
            <Grid2 size={12 / currentSlidesToShow} key={idx}>
              {child}
            </Grid2>
          ))}
        </Grid2>
      </Collapse>
      {isCarousel && triggerButton}
    </Box>
  );
};

export default ShowMore;
