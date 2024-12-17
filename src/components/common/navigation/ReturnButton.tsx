"use client";
import ArrowLeftIconOutlined from "@/components/icons/outlined/ArrowLeft";
import { useNavigation } from "@/contexts/navigation-context";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import {
  alpha,
  Button,
  ButtonBaseProps,
  ButtonProps,
  IconButton,
  IconButtonProps,
  SxProps,
  Theme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
type ReturnButtonProps = Omit<ButtonBaseProps, "href"> & {
  label?: string;
  fixed?: boolean;
  possiblePrevLinks?: string[];
};
const ReturnButton = ({
  label,
  fixed,
  sx,
  possiblePrevLinks,
  ...props
}: ReturnButtonProps) => {
  const router = useRouter();
  const styles: SxProps<Theme> = {
    justifyContent: "start",
    columnGap: 2,
    bgcolor: (theme) => alpha(theme.palette.common.white, 0.5),
    color: "common.black",
    ...(fixed && { position: "fixed", top: 0, left: 0, m: 2 }),
    ...sx,
  };
  const { getLastVisited } = useNavigation();

  const prevLink = useMemo(
    () =>
      possiblePrevLinks
        ? getLastVisited(possiblePrevLinks) ?? possiblePrevLinks[0]
        : undefined,
    [getLastVisited, possiblePrevLinks]
  );
  useEffect(() => {
    if (prevLink) {
      router.prefetch(prevLink);
    }
  }, [router, prevLink]);
  const handleClick = () => {
    if (prevLink) {
      router.push(prevLink);
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
          <ArrowBackIosNew sx={{ fontSize: 20 }} />
        </IconButton>
      )}
    </>
  );
};

export default ReturnButton;
