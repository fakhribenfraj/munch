"use client";
import MapGl, { MapProps } from "react-map-gl";

const Map = ({
  children,
  ...props
}: Omit<MapProps, "projection" | "logoPosition" | "terrain">) => {
  return (
    <MapGl
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      {...props}
    >
      {children}
    </MapGl>
  );
};

export default Map;
