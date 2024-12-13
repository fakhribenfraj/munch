"use client";
import Carousel from "@/components/custom/Carousel";
import useResponsive from "@/hooks/useResponsive";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import {
  Box,
  Collapse,
  Grid2,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Children, useRef, useState } from "react";

interface FoodCategoryProps {
  children: React.ReactNode;
  slidesToShow?: number | { xs?: number; sm?: number; md?: number };
  align?: "left" | "center" | "right";
}

const ShowMore = ({ children, slidesToShow, align }: FoodCategoryProps) => {
  const [showingMore, setShowingMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  let currentSlidesToShow = useResponsive<number>(slidesToShow, 1);

  const openedHeight = ref.current?.offsetTop ?? 0;
  const isNoSlides = Children.count(children) <= currentSlidesToShow;
  const triggerButton = (
    <IconButton
      sx={{
        display: "block",
        margin: "auto",
        mt: 2,
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
      {showingMore ? (
        <KeyboardDoubleArrowUpIcon />
      ) : (
        <KeyboardDoubleArrowDownIcon />
      )}
    </IconButton>
  );
  return (
    <Box ref={ref}>
      {!showingMore && (
        <Carousel
          slidesToShow={currentSlidesToShow}
          arrows={!isNoSlides}
          dots={!isNoSlides}
          align={align}
        >
          {children}
        </Carousel>
      )}
      {!isNoSlides && (
        <Collapse in={showingMore} timeout="auto" collapsedSize={56}>
          {!showingMore && triggerButton}
          <Grid2 container ref={ref}>
            {Children.map(children, (child, idx) => (
              <Grid2 size={12 / currentSlidesToShow} key={idx}>
                {child}
              </Grid2>
            ))}
          </Grid2>
          {showingMore && triggerButton}
        </Collapse>
      )}
    </Box>
  );
};

export default ShowMore;
