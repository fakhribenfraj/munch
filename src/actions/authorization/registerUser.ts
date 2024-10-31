"use server";
import endpoints from "@/constants/endpoints";
import secureFetch from "@/utils/fetch";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  const res = await secureFetch(endpoints.REGISTER, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation: confirmPassword,
      device_name: "mobile",
    }),
  });

  const resData = await res.json();

  return resData;
};
