"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

const updatePassword = async (
  oldPassword: string,
  password: string,
  confirmPassword: string
) => {
  const res = await secureFetch(`${endpoints.PROFILE}/password`, {
    method: "PUT",
    body: JSON.stringify({
      old_password: oldPassword,
      password: password,
      password_confirmation: confirmPassword,
    }),
  });
  return await res.json();
};

export default updatePassword;
