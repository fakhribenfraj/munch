"use client";
import useResponsive from "@/hooks/useResponsive";
import {
  Box,
  Collapse,
  Grid2,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { Children, useRef, useState } from "react";
import ArrowsDownIconOutlined from "../icons/outlined/ArrowsDown";
import { CarouselPagination } from "./carousels";

type ShowMoreProps = {
  children: React.ReactNode;
  slidesToShow?: number | { xs?: number; sm?: number; md?: number };
  autoPlay?: number;
  infinite?: boolean;
  spacing?: number;
  title?: string;
};

const ShowMore = ({
  children,
  slidesToShow,
  autoPlay,
  infinite,
  spacing = 0,
  title,
}: ShowMoreProps) => {
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
    <Stack>
      {title && (
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: !showingMore && isCarousel ? -4 : 2 }}
        >
          {title}
        </Typography>
      )}

      <Box ref={ref}>
        {!showingMore && isCarousel && (
          <CarouselPagination
            slidesToShow={currentSlidesToShow}
            {...(autoPlay !== undefined && {
              autoplay: true,
              autoplaySpeed: autoPlay,
            })}
            infinite={infinite}
            spacing={spacing}
          >
            {children}
          </CarouselPagination>
        )}

        <Collapse in={showingMore || !isCarousel} timeout="auto">
          <Grid2 container ref={ref} spacing={spacing}>
            {Children.map(children, (child, idx) => (
              <Grid2 size={12 / currentSlidesToShow} key={idx}>
                {child}
              </Grid2>
            ))}
          </Grid2>
        </Collapse>
        {isCarousel && triggerButton}
      </Box>
    </Stack>
  );
};

export default ShowMore;
