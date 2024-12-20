import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, CardMedia } from '@mui/material';

type PlateHeaderProps = {
  image: string;
};
const PlateHeader = ({ image }: PlateHeaderProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Chicken Burger"
        sx={{ borderRadius: { xs: 0, md: 2 } }}
      />
      <FavoriteBorderIcon
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: "#fff",
          borderRadius: "50%",
          padding: 0.5,
          fontSize: 28,
          cursor: "pointer",
        }}
      />
    </Box>
  );
};

export default PlateHeader;
