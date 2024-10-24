import RangeInput from "@/components/common/inputs/RangeInput";
import { Button, Slider, Stack, Typography } from "@mui/material";
import { useState } from "react";

const FilterForm = () => {
  const CheckBoxInputs = [
    {
      label: "Category",
      items: ["meat", "fruit", "drinks", "bread", "veggies", "dairy"],
    },
    {
      label: "Rating",
      items: ["5 stars", "4 stars", "3 stars", "2 stars", "1 stars"],
    },
  ];
  const RangeInputs = [
    {
      label: "Distance",
      min: 500,
      max: 10000,
    },
    {
      label: "Pricing",
      min: 1,
      max: 120,
    },
  ];
  return (
    <Stack gap={4}>
      {CheckBoxInputs.map((input) => (
        <Stack key={input.label} gap={2}>
          <Typography>{input.label}</Typography>
          <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
            {input.items.map((item) => (
              <Button key={item + input.label} variant="outlined">
                {item}
              </Button>
            ))}
          </Stack>
        </Stack>
      ))}
      {RangeInputs.map((input) => (
        <Stack key={input.label}>
          <Typography>{input.label}</Typography>
          <RangeInput
            size="medium"
            min={input.min}
            max={input.max}
            disableSwap
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default FilterForm;
