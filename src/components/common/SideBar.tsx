import { Box, List, ListItem, Paper, Stack, Typography } from "@mui/material";
import UrlActiveListItem, {
  UrlActiveListItemProps,
} from "./navigation/UrlActiveListItem";
type SideBarProps = {
  menuLinks: {
    category: string;
    links: UrlActiveListItemProps[];
  }[];
};
const SideBar = ({ menuLinks }: SideBarProps) => {
  return (
    <Paper
      sx={{
        flexShrink: 0,
        height: "100%",
        boxSizing: "border-box",
        p: 2,
        borderRadius: 0,
        boxShadow: 2,
      }}
    >
      <Stack
        sx={{
          color: "text.secondary",
          rowGap: { xs: 2, md: 5 },
        }}
      >
        {menuLinks.map((menuItem) => (
          <List key={menuItem.category}>
            <ListItem disablePadding>
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "uppercase" }}
                gutterBottom
              >
                {menuItem.category}
              </Typography>
            </ListItem>
            {menuItem.links.map((link, index) => (
              <ListItem key={link.label} disablePadding disableGutters>
                <UrlActiveListItem {...link} />
              </ListItem>
            ))}
          </List>
        ))}
      </Stack>
    </Paper>
  );
};

export default SideBar;
