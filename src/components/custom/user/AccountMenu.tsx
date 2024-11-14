import { routes } from "@/constants/routes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { ListItemButton, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import UserAvatar from "./UserAvatar";

export default function AccountMenu() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigationItems = useMemo(
    () => [
      {
        label: "Profile",
        icon: <AccountCircleOutlinedIcon />,
        url: `${routes.ACCOUNT}/profile`,
      },
      {
        label: "Wishlist",
        icon: <FavoriteBorderIcon />,
        url: routes.WISHLIST,
      },
      {
        label: "Notification",
        icon: <NotificationsNoneIcon />,
        url: routes.NOTIFICATION,
      },
    ],
    []
  );
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <UserAvatar
            onClick={handleClick}
            name={session?.user.name ?? null}
            image={session?.user.avatar ?? null}
          />
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              textTransform: "capitalize",
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {session && (
          <Box>
            {navigationItems.map((linkItem) => (
              <ListItemButton key={linkItem.label} href={linkItem.url}>
                <ListItemIcon>{linkItem.icon}</ListItemIcon>
                <ListItemText>{linkItem.label}</ListItemText>
              </ListItemButton>
            ))}
            <Divider />
            <ListItemButton href={routes.ACCOUNT}>
              <ListItemIcon>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                signOut({ callbackUrl: routes.HOME });
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText>logout</ListItemText>
            </ListItemButton>
          </Box>
        )}

        {!session && (
          <ListItemButton>
            <Link href={routes.SIGNIN}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              Sign In
            </Link>
          </ListItemButton>
        )}
      </Menu>
    </>
  );
}
