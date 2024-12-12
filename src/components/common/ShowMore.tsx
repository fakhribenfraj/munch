"use client";
import Carousel from "@/components/custom/Carousel";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Box, Collapse, Grid2, IconButton } from "@mui/material";
import { Children, useRef, useState } from "react";

interface FoodCategoryProps {
  children: React.ReactNode;
  slidesToShow?: number;
}

const ShowMore = ({ children, slidesToShow = 1 }: FoodCategoryProps) => {
  const [showingMore, setShowingMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const openedHeight = ref.current?.offsetTop ?? 0;
  const isSmallList = Children.count(children) <= slidesToShow;
  const triggerButton = (
    <IconButton
      sx={{
        display: "block",
        margin: "auto",
        mt: 2,
      }}
      onClick={() => {
        if (showingMore) {
          window.scroll({
            top: openedHeight - 200,
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
          slidesToShow={slidesToShow}
          arrows={!isSmallList}
          dots={!isSmallList}
        >
          {children}
        </Carousel>
      )}
      {!isSmallList && (
        <Collapse in={showingMore} timeout="auto" collapsedSize={56}>
          {!showingMore && triggerButton}
          <Grid2 container ref={ref}>
            {Children.map(children, (child, idx) => (
              <Grid2 size={12 / slidesToShow} key={idx}>
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
