"use server";
import endpoints from "@/constants/endpoints";
import { ActionResponse } from "@/types/api";
import secureFetch from "@/utils/fetch";
import { getRandomInt } from "@/utils/number";
type GetRestaurantResponse = {
  id: string;
  name: string;
  slug: string;
  phone: string;
  alt_phone: string;
  email: string;
  website: string;
  description: string;
  address: string;
  governorate: string;
  delegation: string;
  town: string;
  postal_code: string;
  lat: number;
  lng: number;
  cover: string;
  logo: string;
  verified: boolean;
  public: boolean;
  published_by: number;
  accepted_by: number | null;
  created_at: string;
  updated_at: string;
  images: string[];
};
export const getRestaurantById = async (id: string) => {
  const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/24/4a/36/au-coeur-de-la-medina.jpg?w=600&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a2/f8/56/un-bel-endroit.jpg?w=600&h=400&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f4/6d/ea/el-ali-resto-cafe-culturel.jpg?w=600&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/11/f1/22/el-ali.jpg?w=600&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/bb/97/af/la-salle-ouverte-de-restaurant.jpg?w=600&h=400&s=1",
  ];
  const res = await secureFetch(`${endpoints.RESTAURANTS}/${id}`);
  const resData = await res.json();
  return {
    ...resData,
    data: {
      ...resData.data,
      images: images.slice(getRandomInt(5), 5),
    },
  } as ActionResponse<GetRestaurantResponse>;
};
