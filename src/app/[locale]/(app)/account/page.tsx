import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import LogoutButton from "@/components/common/auth/LogoutButton";
import UserAvatar from "@/components/custom/user/UserAvatar";
import MainLayout from "@/components/layouts/MainLayout";
import { routes } from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  Avatar,
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
import { getServerSession } from "next-auth";

const Home: NextPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <MainLayout>
      <Stack sx={{ pb: 2 }}>
        <Typography variant="h3">Account</Typography>
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
                <UserAvatar
                  sx={{
                    width: 56,
                    height: 56,
                  }}
                  name={session?.user.name ?? null}
                  image={session?.user.avatar ?? null}
                />
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
                description:
                  "find your info here find your info here find your info here",
                url: "/personal-info",
                icon: <AccountCircleOutlinedIcon />,
              },
              {
                label: "Privacy & security",
                description:
                  "find your info here find your info here find your info here",
                url: "/privacy",
                icon: <SecurityIcon />,
              },
              {
                label: "Settings",
                description:
                  "find your info here find your info here find your info here",
                url: "/settings",
                icon: <SettingsOutlinedIcon />,
              },
            ].map((item) => (
              <Grid2 key={`profile-${item.label}`} size={{ xs: 12, md: 4 }}>
                <ListItem>
                  <ListItemButton
                    href={`${routes.ACCOUNT}/${item.url}`}
                    sx={{
                      justifyContent: "space-between",
                      bgcolor: { xs: "none", md: "common.white" },
                      borderRadius: { xs: 0, md: 2 },
                      boxShadow: { xs: 0, md: 3 },
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <Stack rowGap={2}>
                        <ListItemText>{item.label}</ListItemText>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "grey.600",
                            display: { xs: "none", md: "initial" },
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Stack>
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
        <LogoutButton sx={{ display: { md: "none" }, mt: 12 }} />
      </Stack>
    </MainLayout>
  );
};
export default Home;
