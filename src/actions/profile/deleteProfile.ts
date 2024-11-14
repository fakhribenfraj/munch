"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

const deleteProfile = async () => {
  const res = await secureFetch(`${endpoints.PROFILE}`, {
    method: "DELETE",
  });

  return res;
};

export default deleteProfile;
