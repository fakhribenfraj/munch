import getProfile from "@/actions/profile/getProfile";
import FileInput from "@/components/common/inputs/FileInput";
import ReturnButton from "@/components/common/navigation/ReturnButton";
import AvatarSelect from "@/components/custom/AvatarSelect";
import {
  Avatar,
  Box,
  Button,
  Chip,
  List,
  ListItem,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
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
      <List>
        <ListItem>
          <AvatarSelect src={profile.data.avatar} alt={profile.data.name} />
        </ListItem>
        {Object.entries(profile.data).map(([key, value]) => (
          <ListItem key={key}>{`${key}: ${value}`}</ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Page;
