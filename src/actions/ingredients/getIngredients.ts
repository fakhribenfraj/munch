"use server";
import endpoints from "@/constants/endpoints";
import { ActionResponse } from "@/types/api";
import secureFetch from "@/utils/fetch";
export type GetIngredientsResponse = {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
};
export const getIngredients = async () => {
  const res = await secureFetch(endpoints.INGREDIENTS);
  const resData = await res.json();
  return resData as ActionResponse<GetIngredientsResponse[]>;
};
