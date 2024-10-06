"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const getUserProfile = async () => {
  const res = await secureFetch(endpoints.PROFILE);

  return { data: await res.json() };
};
