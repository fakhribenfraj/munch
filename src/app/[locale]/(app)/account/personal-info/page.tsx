import getProfile from "@/actions/profile/getProfile";
import FileInput from "@/components/common/inputs/FileInput";
import ReturnButton from "@/components/common/navigation/ReturnButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Avatar, Box, Chip, List, ListItem, Paper } from "@mui/material";
import { NextPage } from "next";
const Page: NextPage = async () => {
  const profile = await getProfile();
  return (
    <Box>
      <ReturnButton
        label="profile"
        sx={{
          mb: 2,
        }}
      />
      <List>
        <ListItem>
          <Box sx={{ position: "relative", margin: "auto",mb:2 }}>
            <Avatar
              sx={{
                width: 160,
                height: 160,
                bgcolor: "grey.400",
              }}
              alt={profile.data.name}
              src={profile.data.avatar}
            />
            <FileInput
              id="avatar"
              accept="image/*"
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translate(-50%,50%)",
              }}
            >
              <Chip
                icon={<PhotoCameraIcon />}
                label="Edit"
                variant="filled"
                color="warning"
                sx={{
                  bgcolor: "common.white",
                  boxShadow: 4,
                }}
              />
            </FileInput>
          </Box>
        </ListItem>
        {Object.entries(profile.data).map(([key, value]) => (
          <ListItem key={key}>{`${key}: ${value}`}</ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Page;
