"use server";
import endpoints from "@/constants/endpoints";
import { ActionResponse } from "@/types/api";
import secureFetch from "@/utils/fetch";
import { getRandomInt } from "@/utils/number";
import { attachements } from "./mock/attachements";
export type GetRestaurantsResponse = {
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
export const getRestaurants = async () => {
 
  const res = await fetch(endpoints.RESTAURANTS);
  const resData = await res.json();
  return {
    ...resData,
    ok: res.ok,
    data: resData.data.map((resto: any) => ({
      ...resto,
      images: attachements.slice(getRandomInt(5), 5),
    })),
  } as ActionResponse<GetRestaurantsResponse[]>;
};
