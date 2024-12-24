"use server";
import endpoints from "@/constants/endpoints";
import { ActionResponse } from "@/types/api";
import secureFetch from "@/utils/fetch";
import { getRandomInt } from "@/utils/number";
import { attachements } from "./mock/attachements";
import { getGeoDistance } from "@/utils/geolocation";
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
  images: {
    id: string;
    url: string;
    name: string;
  }[];
};
export const getRestaurants = async (filters?: {
  position: { lng: number; lat: number };
  params: any;
}) => {
  const res = await fetch(endpoints.RESTAURANTS);
  const resData = await res.json();
  const result = {
    ...resData,
    ok: res.ok,
    data: resData.data
      .filter(({ lng, lat }: any) => {
        let condition = true;

        if (filters) {
          const distance = getGeoDistance(filters.position, { lng, lat });
          if (
            filters.params.distance &&
            (distance < filters.params.distance[0] * 1000 ||
              distance > filters.params.distance[1] * 1000)
          ) {
            condition = false;
          }
        }
        return condition;
      })
      .map((resto: any) => ({
        ...resto,
        images: attachements.slice(getRandomInt(5), 5),
      })),
  } as ActionResponse<GetRestaurantsResponse[]>;

  return result;
};
