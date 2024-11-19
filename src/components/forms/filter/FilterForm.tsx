import RangeInput from "@/components/common/inputs/RangeInput";
import {
  Autocomplete,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid2,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FormSection from "../FormSection";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useFilterStore } from "@/providers/filter-store-provider";
const FilterForm = () => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const CheckBoxInputs = [
    {
      label: "Category",
      items: ["breakfast", "brunch", "lunch", "dinner"],
    },
    {
      label: "type",
      items: ["meat", "fruit", "drinks", "bread", "veggies", "dairy"],
    },
  ];
  const RangeInputs = [
    {
      label: "Distance",
      min: 500,
      max: 10000,
    },
    {
      label: "Price",
      min: 1,
      max: 120,
    },
  ];
  const top100Films = [
    { title: "tomato" },
    { title: "potato" },
    { title: "garlic" },
    { title: "onion" },
    { title: "meat" },
    { title: "cheese" },
    { title: "letus" },
    { title: "peanut" },
  ];
  const { count, incrementCount, reset } = useFilterStore(
    (state) => state
  );
  return (
    <Stack gap={4}>
      <FormSection title="resto info">
        {[
          {
            label: "space",
            items: [
              { label: "terasse", name: "terasse" },
              { label: "smoking area", name: "smoking" },
              { label: "kids space", name: "kids" },
            ],
          },
          {
            label: "service",
            items: [
              { label: "wifi", name: "wifi" },
              { label: "takeout", name: "takeout" },
              { label: "reservation", name: "reservation" },
              { label: "delivery", name: "delivery" },
            ],
          },
        ].map((input) => (
          <Grid2 key={input.label} container>
            <Grid2 size={{ xs: 2 }}>
              <Typography>{input.label}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 10 }}>
              {input.items.map((item) => (
                <FormControlLabel
                  key={item.label + input.label}
                  control={<Checkbox />}
                  label={item.label}
                />
              ))}
            </Grid2>
          </Grid2>
        ))}
        <Grid2 size={{ xs: 12 }}>
          <Grid2 container>
            <Grid2 size={{ xs: 2 }}>
              <Typography>open</Typography>
            </Grid2>
            <Grid2 size={{ xs: 10 }}>
              <RangeInput size="medium" min={1} max={24} disableSwap />
            </Grid2>
          </Grid2>
        </Grid2>
      </FormSection>
      <FormSection title="food">
        {CheckBoxInputs.map((input) => (
          <Grid2 key={input.label} container>
            <Grid2 size={{ xs: 2 }}>
              <Typography>{input.label}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 10 }}>
              {input.items.map((item) => (
                <FormControlLabel
                  key={item + input.label}
                  control={<Checkbox />}
                  label={item}
                />
              ))}
            </Grid2>
          </Grid2>
        ))}
        <Grid2 container>
          <Grid2
            size={{ xs: 2 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>exclude</Typography>
          </Grid2>
          <Grid2 size={{ xs: 10 }}>
            <Autocomplete
              multiple
              options={top100Films}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                  <li key={key} {...optionProps}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                );
              }}
              fullWidth
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => {
                  const { key, ...tagProps } = getTagProps({ index });
                  return <Chip key={key} label={option.title} {...tagProps} />;
                })
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="ingredients"
                  placeholder={"exclude ingredients"}
                />
              )}
            />
          </Grid2>
        </Grid2>
      </FormSection>
      <FormSection title="general">
        {RangeInputs.map((input) => (
          <Grid2 key={input.label} container>
            <Grid2 size={{ xs: 2 }}>
              <Typography>{input.label}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 10 }}>
              <RangeInput
                size="medium"
                min={input.min}
                max={input.max}
                disableSwap
              />
            </Grid2>
          </Grid2>
        ))}
      </FormSection>
      <FormSection title="ratings">
        {[
          { label: "taste", name: "taste" },
          { label: "vibe", name: "vibe" },
          { label: "service", name: "service" },
        ].map((item) => (
          <Grid2 key={item.name} container>
            <Grid2 size={{ xs: 2 }}>
              <Typography>{item.label}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 10 }}>
              <Rating name="size-large" defaultValue={5} size="large" />
            </Grid2>
          </Grid2>
        ))}
      </FormSection>
    </Stack>
  );
};

export default FilterForm;
