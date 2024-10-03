import { getUserProfile } from "@/actions/authorization/getUserProfile";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const profile = await getUserProfile();
  return (
    <Box>
      <Typography variant="h4">this is home</Typography>
    </Box>
  );
};
export default Home;
