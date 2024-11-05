"use server";
import endpoints from "@/constants/endpoints";
import { routes } from "@/constants/routes";
import secureFetch from "@/utils/fetch";
import { revalidatePath } from "next/cache";

const deleteAvatar = async () => {
  const res = await secureFetch(`${endpoints.PROFILE}/avatar`, {
    method: "Delete",
  });
  revalidatePath(`${routes.ACCOUNT}/profile`)
  return await res.json();
};

export default deleteAvatar;
