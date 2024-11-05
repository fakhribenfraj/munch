"use server";
import endpoints from "@/constants/endpoints";
import { ActionResponse } from "@/types/api";
import secureFetch from "@/utils/fetch";
export type GetRestaurantAttachementResponse = {
  id: string;
  name: string;
  url: string;
};
export const getRestaurantAttachementsById = async (id: string) => {
  const res = await secureFetch(`${endpoints.RESTAURANTS}/${id}/attachments`);
  const resData = await res.json();
  return (resData ?? []) as ActionResponse<GetRestaurantAttachementResponse[]>;
};
