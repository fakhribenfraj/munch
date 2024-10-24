"use client";
import { Slider, SliderProps } from "@mui/material";
import React from "react";

type RangeProps = SliderProps & {
  minDistance?: number;
};
const RangeInput = ({ minDistance = 1, ...props }: RangeProps) => {
  const [value, setValue] = React.useState<number[]>([
    props.min ?? 0,
    props.max ?? minDistance,
  ]);
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      {...props}
    />
  );
};

export default RangeInput;
