"use client";
import {
  GetRestaurantAttachementResponse,
  getRestaurantAttachementsById,
} from "@/actions/restaurants/getRestaurantAttachementsById";
import useServerAction from "@/hooks/useServerAction";
import { ActionResponse } from "@/types/api";
import { CardMedia, Skeleton } from "@mui/material";
import { useEffect } from "react";
import Carousel from "../Carousel";

type RestaurantMediaCarouselProps = {
  id: string;
};
const RestaurantMediaCarousel = ({ id }: RestaurantMediaCarouselProps) => {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/2533/2533563.png";
  const { isPending, response, startAction } =
    useServerAction<ActionResponse<GetRestaurantAttachementResponse[]>>();
  useEffect(() => {
    if (id) {
      startAction(getRestaurantAttachementsById(id));
    }
  }, [id]);
  const images =
    response?.data && response?.data.length > 0
      ? response?.data
      : [{ id: "dfault", name: "default", url: defaultImg }];
  return (
    <Carousel>
      {isPending && (
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={190}
          sx={{
            bgcolor: "grey.300",
          }}
        />
      )}
      {!isPending &&
        response?.data.length &&
        response?.data.length > 0 &&
        response?.data?.map((image) => (
          <CardMedia
            key={image.id}
            sx={{
              height: 190,
            }}
            image={image.url}
            title={image.name}
          />
        ))}
      {!isPending &&
        images.map((image) => (
          <CardMedia
            key={image.id}
            sx={{
              height: 190,
            }}
            image={image.url}
            title={image.name}
          />
        ))}
    </Carousel>
  );
};

export default RestaurantMediaCarousel;
