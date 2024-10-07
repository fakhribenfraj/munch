"use client";
import { Marker as MarkerGl, MarkerProps } from "react-map-gl";

const Marker = ({ children, ...props }: MarkerProps) => {
  return (
    <MarkerGl anchor="bottom" {...props}>
      {children}
    </MarkerGl>
  );
};

export default Marker;
