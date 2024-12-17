import { Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Arrow = ({
  onClick,
  variant,
}: {
  onClick?: () => void;
  variant: "next" | "prev";
}) => {
  return (
    <Fab
      size="small"
      color="default"
      className={`slick-arrow arrow-${variant}`}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: variant === "next" ? 0 : undefined,
        left: variant === "prev" ? 0 : undefined,
        m: 2,
        boxShadow: 2,
        backgroundColor: "common.white",
        border: "1px solid",
        borderColor: "grey.300",
      }}
      onClick={onClick}
    >
      {variant === "next" ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
    </Fab>
  );
};

export default Arrow;
