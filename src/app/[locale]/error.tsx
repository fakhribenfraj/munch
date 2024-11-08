"use client"; // Error boundaries must be Client Components

import { Button, Stack, Typography } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  return (
    <Stack gap={4} alignItems="center" justifyContent="center">
      <Typography variant="h2">Something went wrong!</Typography>
      <Button
        variant="contained"
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </Stack>
  );
}
