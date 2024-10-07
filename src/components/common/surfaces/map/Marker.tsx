"use client";
import React from "react";
import { Marker as MarkerGl, MarkerProps } from "react-map-gl";

const Marker = ({ children, ...props }: MarkerProps) => {
  return (
    <MarkerGl {...props} anchor="bottom">
      {children}
    </MarkerGl>
  );
};

export default Marker;
