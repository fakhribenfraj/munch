"use client";
import useMyLocation from "@/hooks/common/useMyLocation";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
type GoogleDirectionsProps = {
  lng: number;
  lat: number;
  children?: ReactNode;
};
const GoogleDirections = ({ lat, lng, children }: GoogleDirectionsProps) => {
  const position = useMyLocation();
  return (
    <Link
      target="_blank"
      href={`https://www.google.com/maps/dir/${position?.lat},${position?.lng}/${lat},${lng}`}
    >
      <Stack direction="row" spacing={1}>
        <DirectionsIcon />
        {children ?? <Typography>get direction</Typography>}
      </Stack>
    </Link>
  );
};

export default GoogleDirections;
