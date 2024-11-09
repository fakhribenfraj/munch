import {
  GetRestaurantAttachementResponse,
  getRestaurantAttachementsById,
} from "@/actions/restaurants/getRestaurantAttachementsById";
import React, { Suspense, useEffect, useState, useTransition } from "react";
import Carousel from "../Carousel";
import { CardMedia, Skeleton } from "@mui/material";

type RestaurantMediaCarouselProps = {
  id: string;
};
const RestaurantMediaCarousel = ({ id }: RestaurantMediaCarouselProps) => {
  // const [isPending, startTransition] = useTransition();
  const [isPending, setIsPending] = useState<boolean>(true);
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/2533/2533563.png";
  const [images, setImages] = useState<GetRestaurantAttachementResponse[]>([]);
  useEffect(() => {
    const startTransition = async () => {
      const images = await getRestaurantAttachementsById(id);
      if (images.data.length > 0) {
        setImages(images.data);
      } else {
        setImages([{ id: "test", name: "test", url: defaultImg }]);
      }
      setIsPending(false);
    };
    startTransition();
  }, []);
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
