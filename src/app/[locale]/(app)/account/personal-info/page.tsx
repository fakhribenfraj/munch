import getProfile from "@/actions/profile/getProfile";
import ReturnButton from "@/components/common/navigation/ReturnButton";
import AvatarSelect from "@/components/custom/AvatarSelect";
import ProfileForm from "@/components/forms/account/ProfileForm";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  const profile = await getProfile();
  return (
    <Box>
      <ReturnButton
        sx={{
          my: 2,
        }}
      />
      <Stack rowGap={4}>
        <AvatarSelect src={profile.data.avatar} name={profile.data.name} />
        <ProfileForm />
      </Stack>
    </Box>
  );
};
export default Page;
