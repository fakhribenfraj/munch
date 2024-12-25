import { useEffect } from "react";
import React, { useState } from "react";

const useMyLocation = () => {
  const [position, setPosition] = useState<{ lng: number; lat: number } | null>(
    null
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return position;
};

export default useMyLocation;
