"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

const deleteAvatar = async () => {
  const res = await secureFetch(`${endpoints.PROFILE}/avatar`, {
    method: "Delete",
  });
  return await res.json();
};

export default deleteAvatar;
