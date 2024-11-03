import getProfile from "@/actions/profile/getProfile";
import { Stack } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  const profile = await getProfile();
  return <Stack rowGap={4}>user preferences</Stack>;
};
export default Page;
