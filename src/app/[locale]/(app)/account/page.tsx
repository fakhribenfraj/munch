import LogoutButton from "@/components/common/auth/LogoutButton";
import { routes } from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import {
  Box,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import MainLayout from "@/components/layouts/MainLayout";
const Home: NextPage = () => {
  return (
    <MainLayout>
      <Stack>
        <Typography variant="h2">Account</Typography>
        <List>
          <Grid2 container>
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
              <Grid2 key={`profile-${item.label}`} size={{ xs: 12, md: 4 }}>
                <ListItem>
                  <ListItemButton
                    href={`${routes.ACCOUNT}/${item.url}`}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText>{item.label}</ListItemText>
                    </Box>
                    <ListItemIcon
                      sx={{
                        display: { md: "none" },
                      }}
                    >
                      <NavigateNextOutlinedIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Grid2>
            ))}
          </Grid2>
        </List>
        <LogoutButton sx={{ display: { md: "none" } }} />
      </Stack>
    </MainLayout>
  );
};
export default Home;
