"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const getUserProfile = async () => {
  return await secureFetch(endpoints.PROFILE);
};
