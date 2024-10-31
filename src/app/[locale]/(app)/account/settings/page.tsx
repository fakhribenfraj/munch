import getProfile from "@/actions/profile/getProfile";
import LogoutButton from "@/components/common/auth/LogoutButton";
import ReturnButton from "@/components/common/navigation/ReturnButton";
import { Box, List, ListItem, Typography } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  const profile = await getProfile();
  return (
    <Box>
      <ReturnButton
        label="account"
        sx={{
          mb: 6,
        }}
      />
      <Typography variant="h4">settings</Typography>
      <List>
        {Object.entries(profile.data).map(([key, value]) => (
          <ListItem key={key}>{`${key}: ${value}`}</ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Page;
