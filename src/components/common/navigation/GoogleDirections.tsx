import { Button, Stack } from "@mui/material";
import Link from "next/link";
import React, { ReactNode } from "react";
import DirectionsIcon from "@mui/icons-material/Directions";
type GoogleDirectionsProps = {
  lng: number;
  lat: number;
  children?: ReactNode;
};
const GoogleDirections = ({ lat, lng, children }: GoogleDirectionsProps) => {
  return (
    <Link
      color="primary"
      target="_blank"
      href={`https://www.google.com/maps/dir//${lat},${lng}`}
    >
      <Stack direction="row" spacing={1}>
        <DirectionsIcon />
        {children ?? "get direction"}
      </Stack>
    </Link>
  );
};

export default GoogleDirections;
