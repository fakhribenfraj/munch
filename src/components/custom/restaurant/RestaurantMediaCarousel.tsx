"use client";
import {
  GetRestaurantAttachementResponse,
  getRestaurantAttachementsById,
} from "@/actions/restaurants/getRestaurantAttachementsById";
import useServerAction from "@/hooks/useServerAction";
import { CardMedia, Skeleton } from "@mui/material";
import { useEffect } from "react";
import Carousel from "../Carousel";
import { routes } from "@/constants/routes";
import Link from "next/link";

type RestaurantMediaCarouselProps = {
  id: string;
};
const RestaurantMediaCarousel = ({ id }: RestaurantMediaCarouselProps) => {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/2533/2533563.png";
  const { isPending, response, startAction } =
    useServerAction<GetRestaurantAttachementResponse[]>();
  useEffect(() => {
    if (id) {
      startAction(getRestaurantAttachementsById(id));
    }
  }, [id, startAction]);
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
        images.map((image) => (
          <Link href={`${routes.RESTAURANTS}/${id}`} key={image.id}>
            <CardMedia
              sx={{
                height: 190,
              }}
              image={image.url}
              title={image.name}
            />
          </Link>
        ))}
    </Carousel>
  );
};

export default RestaurantMediaCarousel;
