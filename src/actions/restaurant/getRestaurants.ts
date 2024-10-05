"use server";
import endpoints from "@/constants/endpoints";
import { ActionResponse } from "@/types/api";
import secureFetch from "@/utils/fetch";
type GetRestaurantsResponse = {
  id:string
  name: string;
  description: string;
  images: string[];
}[];
export const getRestaurants = async () => {
  return (await secureFetch(
    endpoints.RESTAURANT
  )) as ActionResponse<GetRestaurantsResponse>;
};
