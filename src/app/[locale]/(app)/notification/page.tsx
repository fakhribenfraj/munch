import { getUserProfile } from "@/actions/authorization/getUserProfile";
import LogoutButton from "@/components/common/auth/LogoutButton";
import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const profile = await getUserProfile();
  return (
    <Box>
      <Typography variant="h4">this is the notifications</Typography>
      {[...new Array(25)].map((i) => (
        <List key={i}>
          <Paper elevation={i}>elevation {i}</Paper>
        </List>
      ))}
    </Box>
  );
};
export default Home;
