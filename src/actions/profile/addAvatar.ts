"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

const addAvatar = async (avatarUrl: string) => {
  const fileRes = await fetch(avatarUrl);
  const blob = await fileRes.blob();
  const data = new FormData();
  data.append("avatar", blob);

  const res = await secureFetch(`${endpoints.PROFILE}/avatar`, {
    method: "POST",
    body: data,
    isFileContent: true,
  });

  return await res.json();
};

export default addAvatar;
