"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

const addAvatar = async (avatar: File) => {
  console.log("avatar", avatar);
  const res = await secureFetch(`${endpoints.PROFILE}/avatar`, {
    method: "POST",
    body: JSON.stringify({
      avatar,
    }),
  });
  return await res.json();
};

export default addAvatar;
