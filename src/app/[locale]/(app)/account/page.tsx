import LogoutButton from "@/components/common/auth/LogoutButton";
import { routes } from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import {
  Avatar,
  Box,
  Divider,
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
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const Home: NextPage = async () => {
  const session = await getServerSession(authOptions);
  const name = session?.user.name;
  return (
    <MainLayout>
      <Stack sx={{ height: "100%", pb: 2 }}>
        <Typography variant="h2">Account</Typography>
        <List>
          <ListItem
            sx={{
              display: { md: "none" },
              mb: 8,
            }}
          >
            <ListItemButton
              href={`${routes.ACCOUNT}/profile`}
              sx={{ justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", columnGap: 2 }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    textTransform: "uppercase",
                  }}
                >
                  {name &&
                    (name.split(" ").length > 1
                      ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
                      : `${name.split(" ")[0][0]}${name.split(" ")[0][1]}`)}
                </Avatar>
                <Stack justifyContent="center">
                  <Typography variant="subtitle1">
                    {session?.user.name ?? "user"}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "grey.500" }}>
                    Show profile
                  </Typography>
                </Stack>
              </Box>
              <ListItemIcon>
                <NavigateNextOutlinedIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Grid2 container>
            {[
              {
                label: "Personal info",
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
        <LogoutButton sx={{ display: { md: "none" }, mt: "auto" }} />
      </Stack>
    </MainLayout>
  );
};
export default Home;
