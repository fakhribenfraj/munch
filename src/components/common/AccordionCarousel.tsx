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
import { CarouselDefault, CarouselPagination } from "./carousels";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordionCarouselProps = {
  children: React.ReactNode;
  slidesToShow?: number | { xs?: number; sm?: number; md?: number };
  autoPlay?: number;
  infinite?: boolean;
  spacing?: number;
  title?: string;
};

const AccordionCarousel = ({
  children,
  slidesToShow,
  autoPlay,
  infinite,
  spacing = 0,
  title,
}: AccordionCarouselProps) => {
  const [showingMore, setShowingMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  let currentSlidesToShow = useResponsive<number>(slidesToShow, 1);

  const openedHeight = ref.current?.offsetTop ?? 0;
  console.log(ref.current);
  const isCarousel = Children.count(children) > currentSlidesToShow;
  const triggerButton = (
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
    <Stack spacing={2} ref={ref}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={spacing}
      >
        {title && (
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        )}
        {isCarousel && (
          <IconButton
            onClick={() => setShowingMore(!showingMore)}
            sx={{
              p: 0,
            }}
          >
            <ExpandMoreIcon
              sx={{
                transform: showingMore ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </IconButton>
        )}
      </Stack>

      <Collapse
        in={showingMore || !isCarousel}
        timeout="auto"
        collapsedSize={230}
      >
        {!showingMore && isCarousel && (
          <CarouselDefault
            slidesToShow={currentSlidesToShow}
            {...(autoPlay !== undefined && {
              autoplay: true,
              autoplaySpeed: autoPlay,
            })}
            infinite={infinite}
            spacing={spacing}
          >
            {children}
          </CarouselDefault>
        )}
        {(showingMore || !isCarousel) && (
          <Grid2 container ref={ref}>
            {Children.map(children, (child, idx) => (
              <Grid2 size={12 / currentSlidesToShow} key={idx} p={spacing}>
                {child}
              </Grid2>
            ))}
          </Grid2>
        )}
      </Collapse>
      {isCarousel && showingMore && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {triggerButton}
        </Box>
      )}
    </Stack>
  );
};

export default AccordionCarousel;
