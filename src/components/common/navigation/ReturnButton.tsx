"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Fab, FabProps, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

const ReturnButton = (props: Omit<FabProps, "href">) => {
  const router = useRouter();
  return (
    <IconButton
      {...props}
      size="small"
      sx={{
        bgcolor: "transparent",
        color: "black",
        p: 0,
      }}
      onClick={() => router.back()}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};

export default ReturnButton;
