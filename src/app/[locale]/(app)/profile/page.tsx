import { getUserProfile } from "@/actions/authorization/getUserProfile";
import LogoutButton from "@/components/common/auth/LogoutButton";
import { Box, List, ListItem, Typography } from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const profile = await getUserProfile();
  return (
    <Box>
      <Typography variant="h4">this is the profile</Typography>
      <List>
        {Object.entries(profile.data).map(([key, value]) => (
          <ListItem key={key}>{`${key}: ${value}`}</ListItem>
        ))}
        <ListItem>
          <LogoutButton />
        </ListItem>
      </List>
    </Box>
  );
};
export default Home;
