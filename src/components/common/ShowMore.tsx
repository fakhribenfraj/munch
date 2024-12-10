"use client";
import Carousel from "@/components/custom/Carousel";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Fab, Grid2, Stack } from "@mui/material";
import { Children, useState } from "react";

interface FoodCategoryProps {
  children: React.ReactNode;
  slidesToShow?: number;
}

const ShowMore = ({ children, slidesToShow = 1 }: FoodCategoryProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Stack mb={4} spacing={2}>
      {!showMore && <Carousel slidesToShow={slidesToShow}>{children}</Carousel>}
      {showMore && (
        <Grid2 container>
          {Children.map(children, (child, idx) => (
            <Grid2 size={12 / slidesToShow} key={idx}>
              {child}
            </Grid2>
          ))}
        </Grid2>
      )}
      <Fab
        size="small"
        sx={{
          alignSelf: "center",
          margin: "auto",
        }}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? (
          <KeyboardDoubleArrowUpIcon />
        ) : (
          <KeyboardDoubleArrowDownIcon />
        )}
      </Fab>
    </Stack>
  );
};

export default ShowMore;
