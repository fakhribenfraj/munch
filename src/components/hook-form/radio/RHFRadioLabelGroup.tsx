import { FormControlLabel, Radio } from "@mui/material";
import { useFormContext } from "react-hook-form";
import RHFRadioGroup, { RHFRadioGroupProps } from "./RHFRadioGroup";
type RHFRadioLabelGroupProps = Omit<RHFRadioGroupProps, "children"> & {
  options: { label: string; value: string | number }[];
};
const RHFRadioLabelGroup = ({ options, ...props }: RHFRadioLabelGroupProps) => {
  const { watch } = useFormContext();

  return (
    <RHFRadioGroup {...props}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio sx={{ display: "none" }} />}
          label={option.label}
          sx={{
            backgroundColor:
              option.value == watch(props.name) ? "info.main" : "grey.300",
            color:
              option.value == watch(props.name) ? "common.white" : "inherit",
            width: "5rem",
            padding: 1,
            margin: 0,
            justifyContent: "center",
            borderRadius: 1,
          }}
        />
      ))}
    </RHFRadioGroup>
  );
};

export default RHFRadioLabelGroup;
