import getProfile from "@/actions/profile/getProfile";
import AvatarSelect from "@/components/custom/AvatarSelect";
import ProfileForm from "@/components/forms/account/ProfileForm";
import { Stack } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  const profile = await getProfile();
  return (
    <Stack rowGap={4}>
      <AvatarSelect src={profile.data.avatar} name={profile.data.name} />
      <ProfileForm />
    </Stack>
  );
};
export default Page;
