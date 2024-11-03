import getProfile from "@/actions/profile/getProfile";
import { Box, List, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const profile = await getProfile();
  return (
    <Box>
      <Typography variant="h3">this is the wishlist</Typography>
      {[...new Array(25)].map((i) => (
        <List key={i}>
          <Paper elevation={i}>elevation {i}</Paper>
        </List>
      ))}
    </Box>
  );
};
export default Home;
