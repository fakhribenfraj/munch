import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

const getProfile = async () => {
  const res = await secureFetch(endpoints.PROFILE);
  return await res.json();
};

export default getProfile;
