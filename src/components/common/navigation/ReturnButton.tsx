"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Button,
  ButtonBase,
  ButtonBaseProps,
  ButtonProps,
  Fab,
  FabProps,
  IconButton,
  IconButtonProps,
  SxProps,
  Theme,
} from "@mui/material";
import { useRouter } from "next/navigation";
type ReturnButtonProps = Omit<ButtonBaseProps, "href"> & {
  label?: string;
  fixed?: boolean;
};
const ReturnButton = ({ label, fixed, sx, ...props }: ReturnButtonProps) => {
  const router = useRouter();
  const styles: SxProps<Theme> = {
    justifyContent: "start",
    columnGap: 2,
    bgcolor: "transparent",
    color: "black",
    p: 0,
    ...(fixed && { position: "fixed", top: 0, left: 0, m: 2 }),
    ...sx,
  };
  return (
    <>
      {label ? (
        <Button
          {...(props as ButtonProps)}
          sx={styles}
          onClick={() => router.back()}
          startIcon={<ArrowBackIosNewIcon />}
        >
          {label && label}
        </Button>
      ) : (
        <IconButton
          {...(props as IconButtonProps)}
          sx={styles}
          onClick={() => router.back()}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      )}
    </>
  );
};

export default ReturnButton;
