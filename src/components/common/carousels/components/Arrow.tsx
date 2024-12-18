import { Fab, IconButton, SxProps, Theme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
type ArrowProps = {
  onClick?: () => void;
  variant: "next" | "prev";
  sx?: Omit<SxProps<Theme>, "position">;
};
const Arrow = ({ onClick, variant, sx }: ArrowProps) => {
  return (
    <IconButton
      disableRipple
      size="small"
      color="default"
      className={`slick-arrow arrow-${variant}`}
      sx={{
        position: "absolute",
        top: "50%",
        transform: `translateY(-50%) ${
          variant === "next" ? "rotate(180deg)" : ""
        }`,
        boxShadow: 2,
        border: "1px solid",
        ...(variant === "next" && { right: 0 }),
        ...(variant === "prev" && { left: 0 }),
        backgroundColor: "common.white",
        borderColor: "grey.300",
        ...sx,
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};

export default Arrow;
