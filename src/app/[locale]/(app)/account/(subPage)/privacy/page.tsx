import getProfile from "@/actions/profile/getProfile";
import { Box, List, ListItem, Typography } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  const profile = await getProfile();
  return (
    <Box>
      <Typography variant="h4">Privacy & security</Typography>
      <List>
        {Object.entries(profile.data).map(([key, value]) => (
          <ListItem key={key}>{`${key}: ${value}`}</ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Page;
