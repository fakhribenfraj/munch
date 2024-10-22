import getProfile from "@/actions/profile/getProfile";
import LogoutButton from "@/components/common/auth/LogoutButton";
import ReturnButton from "@/components/common/navigation/ReturnButton";
import { Box, List, ListItem, Typography } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  const profile = await getProfile();
  return (
    <Box>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <ReturnButton />
      </Box>
      <Typography variant="h4">this is the profile</Typography>
      <List>
        {Object.entries(profile.data).map(([key, value]) => (
          <ListItem key={key}>{`${key}: ${value}`}</ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Page;
