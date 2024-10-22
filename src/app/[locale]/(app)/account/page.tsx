import LogoutButton from "@/components/common/auth/LogoutButton";
import { routes } from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SecurityIcon from '@mui/icons-material/Security';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <Stack>
      <Typography variant="h2">Profile</Typography>
      <List>
        {[
          {
            label: "personal info",
            url: "/personal-info",
            icon: <AccountCircleOutlinedIcon />,
          },
          {
            label: "Privacy & security",
            url: "/privacy",
            icon: <SecurityIcon />,
          },
          {
            label: "Settings",
            url: "/settings",
            icon: <SettingsOutlinedIcon />,
          },
        ].map((item) => (
          <ListItem key={`profile-${item.label}`}>
            <ListItemButton
              href={`${routes.ACCOUNT}/${item.url}`}
              sx={{ justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex" }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
              </Box>
              <ListItemIcon>
                <NavigateNextOutlinedIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <LogoutButton />
    </Stack>
  );
};
export default Home;
