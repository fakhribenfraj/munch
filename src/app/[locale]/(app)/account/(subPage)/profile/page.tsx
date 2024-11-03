import getProfile from "@/actions/profile/getProfile";
import AvatarSelect from "@/components/custom/AvatarSelect";
import ProfileForm from "@/components/forms/account/ProfileForm";
import { Grid2, Stack } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  const profile = await getProfile();
  return (
    <Grid2 container rowGap={4}>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <AvatarSelect src={profile.data.avatar} name={profile.data.name} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 9 }}>
        <ProfileForm />
      </Grid2>
    </Grid2>
  );
};
export default Page;
