import RangeInput, {
  RangeInputProps,
} from "@/components/common/inputs/RangeInput";
import { Controller, useFormContext } from "react-hook-form";
type RHFRangeInputProps = RangeInputProps & {
  name: string;
};
const RHFRangeInput = ({ name, ...props }: RHFRangeInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <RangeInput
            {...props}
            {...field}
            value={field.value ?? [props.min, props.max]}
          />
        );
      }}
    />
  );
};

export default RHFRangeInput;
