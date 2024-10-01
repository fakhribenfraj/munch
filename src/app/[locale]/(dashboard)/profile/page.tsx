import { getUserProfile } from "@/actions/authorization/getUserProfile";
import Block from "@/components/common/surfaces/Block";
import { List, ListItem, Typography } from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = async () => {
  const profile = await getUserProfile();
  return (
    <Block>
      <Typography variant="h4">this is the profile</Typography>
      <List>
        {Object.entries(profile.data).map(([key, value]) => (
          <ListItem key={key}>{`${key}: ${value}`}</ListItem>
        ))}
        <ListItem></ListItem>
      </List>
    </Block>
  );
};
export default Home;
