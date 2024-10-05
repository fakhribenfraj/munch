import { alpha, Box, styled } from "@mui/material";

const HorizontalScrollbarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  gap: 1,
  [theme.breakpoints.up("md")]: {
    gap: 2,
  },
  overflowX: "scroll",
  "::-webkit-scrollbar": {
    WebkitAppearance: "none",
    height: "6px",
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: 5,
    backgroundColor: alpha(theme.palette.grey[400], 0.8),
    boxShadow: `0 0 2px ${theme.palette.grey[100]}`,
  },
}));
export default HorizontalScrollbarBox;
