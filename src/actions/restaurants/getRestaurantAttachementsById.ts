"use server";
import endpoints from "@/constants/endpoints";
import { ActionResponse } from "@/types/api";
import secureFetch from "@/utils/fetch";
import { attachements } from "./mock/attachements";
export type GetRestaurantAttachementResponse = {
  id: string;
  name: string;
  url: string;
};
export const getRestaurantAttachementsById = async (id: string) => {
  // const resData = await secureFetch(
  //   `${endpoints.RESTAURANTS}/${id}/attachments`
  // );
  return { data: attachements } as ActionResponse<
    GetRestaurantAttachementResponse[]
  >;
};
