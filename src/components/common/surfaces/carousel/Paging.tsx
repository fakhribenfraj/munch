import { Box } from "@mui/material";
const Paging = ({ index }: { index: number }) => {
  const WIDTH = 9;
  return (
    <Box
      sx={{
        width: WIDTH,
        height: WIDTH,
        borderRadius: "20px",
        filter: "brightness(0.5) grayscale(0.5)",
        backgroundColor: "currentColor",
      }}
    />
  );
};

export default Paging;
