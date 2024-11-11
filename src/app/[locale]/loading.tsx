import Logo from "@/components/custom/Logo";
import { CircularProgress, LinearProgress, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -100%)",
        width: 300,
        rowGap: 8,
      }}
    >
      <Logo direction="horizontal" />
      <LinearProgress />
    </Stack>
  );
}
