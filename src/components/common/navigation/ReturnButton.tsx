"use client";
import ArrowLeftIconOutlined from "@/components/icons/outlined/ArrowLeft";
import { useNavigation } from "@/contexts/navigation-context";
import {
  Button,
  ButtonBaseProps,
  ButtonProps,
  IconButton,
  IconButtonProps,
  SxProps,
  Theme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
type ReturnButtonProps = Omit<ButtonBaseProps, "href"> & {
  label?: string;
  fixed?: boolean;
  url?: string;
};
const ReturnButton = ({
  label,
  fixed,
  sx,
  url,
  ...props
}: ReturnButtonProps) => {
  const router = useRouter();
  const styles: SxProps<Theme> = {
    justifyContent: "start",
    columnGap: 2,
    bgcolor: "common.white",
    color: "common.black",
    ...(fixed && { position: "fixed", top: 0, left: 0, m: 2 }),
    ...sx,
  };
  const { getLastVisited, history } = useNavigation();
  console.log(history);
  useEffect(() => {
    if (url) {
      router.prefetch(url);
    }
  }, [router, url]);
  const handleClick = () => {
    if (url) {
      router.push(url);
    } else {
      router.back();
    }
  };
  return (
    <>
      {label ? (
        <Button
          {...(props as ButtonProps)}
          sx={styles}
          onClick={handleClick}
          startIcon={<ArrowLeftIconOutlined />}
        >
          {label && label}
        </Button>
      ) : (
        <IconButton
          {...(props as IconButtonProps)}
          disableRipple
          sx={{ ...styles }}
          onClick={handleClick}
        >
          <ArrowLeftIconOutlined sx={{ fontSize: 20 }} />
        </IconButton>
      )}
    </>
  );
};

export default ReturnButton;
