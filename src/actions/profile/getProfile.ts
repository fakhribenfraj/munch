"use server";

import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

const getProfile = async () => {
  const res = await secureFetch(endpoints.PROFILE);
  console.log(res)
  return res;
};

export default getProfile;
