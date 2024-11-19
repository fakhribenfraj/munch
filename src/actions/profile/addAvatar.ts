"use server";
import endpoints from "@/constants/endpoints";
import { routes } from "@/constants/routes";
import secureFetch from "@/utils/fetch";
import { revalidatePath } from "next/cache";

const addAvatar = async (avatarUrl: string) => {
  const fileRes = await fetch(avatarUrl);
  const blob = await fileRes.blob();
  const data = new FormData();
  data.append("avatar", blob);

  const res = await secureFetch(`${endpoints.PROFILE}/avatar`, {
    method: "POST",
    body: data,
  });

  revalidatePath(`${routes.ACCOUNT}/profile`);
  return res;
};

export default addAvatar;
