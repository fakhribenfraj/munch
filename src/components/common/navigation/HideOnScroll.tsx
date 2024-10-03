"use client";
import { Slide, SlideProps } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function HideOnScroll({ children, ...props }: SlideProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} {...props} in={!trigger}>
      {children}
    </Slide>
  );
}
export default HideOnScroll;
