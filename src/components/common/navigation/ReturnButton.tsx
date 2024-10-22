"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Button,
  ButtonBase,
  ButtonProps,
  Fab,
  FabProps,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
type ReturnButtonProps = Omit<ButtonProps, "href"> & {
  label?: string;
};
const ReturnButton = ({ label, sx, ...props }: ReturnButtonProps) => {
  const router = useRouter();
  return (
    <Button
      {...props}
      sx={{
        justifyContent: "start",
        columnGap: 2,
        bgcolor: "transparent",
        color: "black",
        p: 0,
        ...sx,
      }}
      onClick={() => router.back()}
      startIcon={<ArrowBackIosNewIcon />}
    >
      {label}
    </Button>
  );
};

export default ReturnButton;
