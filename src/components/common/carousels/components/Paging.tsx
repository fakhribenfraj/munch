import { Box } from "@mui/material";
const Paging = ({ index }: { index: number }) => {
  const WIDTH = 6;
  const OPACITY = 0.7;
  return (
    <Box
      sx={{
        width: WIDTH,
        height: WIDTH,
        borderRadius: "20px",
        opacity: OPACITY,
        backgroundColor: "currentColor",
      }}
    />
  );
};

export default Paging;
