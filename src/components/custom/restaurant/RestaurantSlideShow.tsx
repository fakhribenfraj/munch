"use client";
import { GetRestaurantAttachementResponse } from "@/actions/restaurants/getRestaurantAttachementsById";
import { Box } from "@mui/material";
import { FC } from "react";
import dynamic from "next/dynamic";
const CarouselSlideshow = dynamic(
  () => import("@/components/common/carousels/swiper/CarouselSlideshow"),
  { ssr: false } // Client-side only for better performance
);
interface RestaurantSlideShowProps {
  attachments: GetRestaurantAttachementResponse[];
}

 const RestaurantSlideShow: FC<RestaurantSlideShowProps> = ({
  attachments,
}) => {
  return (
    <CarouselSlideshow sx={{ color: "common.white" }}>
      {attachments.map((image) => (
        <Box key={image.id} sx={{ borderRadius: 1, overflow: "hidden" }}>
          <img
            src={image.url}
            alt={image.name}
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
          />
        </Box>
      ))}
    </CarouselSlideshow>
  );
};
export default RestaurantSlideShow;