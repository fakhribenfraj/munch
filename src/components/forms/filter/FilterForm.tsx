import {
  getFilters,
  getFiltersResponse,
} from "@/actions/restaurants/getFilters";
import RangeInput from "@/components/common/inputs/RangeInput";
import useServerAction from "@/hooks/useServerAction";
import { useFilterStore } from "@/providers/filter-store-provider";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  Autocomplete,
  Checkbox,
  Chip,
  FormControlLabel,
  Rating,
  Stack,
  TextField,
  Typography,
  Divider,
  Button,
  Box,
  Grid2,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useEffect } from "react";

const FilterForm = () => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const {
    isPending,
    response: filtersBlocks,
    startAction,
  } = useServerAction<getFiltersResponse[]>();
  const RangeInputs = [
    {
      label: "Distance",
      min: 1,
      max: 100,
    },
    {
      label: "Price",
      min: 1,
      max: 120,
    },
  ];

  const ingredients = [
    { title: "tomato" },
    { title: "potato" },
    { title: "garlic" },
    { title: "onion" },
    { title: "meat" },
    { title: "cheese" },
    { title: "lettuce" },
    { title: "peanut" },
  ];

  const filters = [
    {
      title: "Resto Info",
      items: [
        { label: "Calm", name: "calm" },
        { label: "Normal", name: "normal" },
        { label: "Antique", name: "antique" },
        { label: "Bar", name: "bar" },
      ],
    },
    {
      title: "Space",
      items: [
        { label: "Terrace", name: "terrace" },
        { label: "Smoking Area", name: "smoking" },
        { label: "Kids Space", name: "kids" },
      ],
    },
    {
      title: "Service",
      items: [
        { label: "WiFi", name: "wifi" },
        { label: "Takeout", name: "takeout" },
        { label: "Reservation", name: "reservation" },
        { label: "Delivery", name: "delivery" },
      ],
    },
  ];
  const foodPreferences = [
    {
      label: "Type",
      items: ["Meat", "Fruit", "Drinks", "Bread", "Veggies", "Dairy"],
    },
    {
      label: "Cuisine",
      items: ["Italian", "Indian", "Mexican", "Chinese", "Tunisian"],
    },
    {
      label: "Cooking Style",
      items: ["Grilled", "Fried", "Baked", "Steamed", "Raw"],
    },
    {
      label: "Size",
      items: ["1 Person", "2 Persons", "4 Persons", "8 Persons"],
    },
    {
      label: "Time",
      items: ["Quick", "Medium", "Slow-Cooked"],
    },
  ];
  useEffect(() => {
    startAction(getFilters());
  }, [startAction]);
  console.log(filtersBlocks);
  return (
    <Stack
      gap={4}
      sx={{ p: 4, background: "#fafafa", borderRadius: 2, boxShadow: 3 }}
    >
      {filtersBlocks?.data.map((block) => (
        <Box key={block.category}>
          <Stack gap={3}>
            <Typography variant="h6" fontWeight="medium" gutterBottom>
              {block.category}
            </Typography>
            <Grid2 container spacing={2}>
              {block.inputs.map((inputItem) => (
                <Grid2
                  size={{
                    xs: 12,
                    md: inputItem.type == "autocomplete" ? 6 : 12,
                  }}
                  key={inputItem.name}
                >
                  {inputItem.type == "range" && (
                    <Box
                      key={inputItem.label}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Typography width="100px">{inputItem.label}</Typography>
                      <RangeInput
                        size="medium"
                        min={inputItem.min}
                        max={inputItem.max}
                        disableSwap
                      />
                    </Box>
                  )}
                  {inputItem.type == "checkbox" && (
                    <Grid2 container>
                      <Grid2 size={3}>
                        <Typography>{inputItem.label}</Typography>
                      </Grid2>
                      <Grid2 size={9}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label={"all"}
                        />
                        {inputItem.options.map((option) => (
                          <FormControlLabel
                            key={option}
                            control={<Checkbox color="primary" />}
                            label={option}
                          />
                        ))}
                      </Grid2>
                    </Grid2>
                  )}
                  {inputItem.type == "autocomplete" && (
                    <Autocomplete
                      multiple
                      options={inputItem.options}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            checked={selected}
                            sx={{ mr: 1 }}
                          />
                          {option.label}
                        </li>
                      )}
                      fullWidth
                      renderTags={(tagValue, getTagProps) =>
                        tagValue.map((option, index) => (
                          <Chip
                            label={option.label}
                            {...getTagProps({ index })}
                            key={index}
                            color="primary"
                            variant="outlined"
                          />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          autoFocus
                          label={inputItem.label}
                          placeholder="Type to search"
                          variant="outlined"
                        />
                      )}
                    />
                  )}
                </Grid2>
              ))}
            </Grid2>
          </Stack>
          <Divider />
        </Box>
      ))}

      {/* Ratings */}
      <Stack gap={3}>
        <Typography variant="h6" fontWeight="medium" gutterBottom>
          Ratings
        </Typography>
        <Grid2 container spacing={2}>
          {["Taste", "Vibe", "Service"].map((rating) => (
            <Grid2 size={{ xs: 12, sm: 4 }} key={rating}>
              <Typography variant="body1" gutterBottom>
                {rating}
              </Typography>
              <Rating name={`${rating}-rating`} defaultValue={5} size="large" />
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </Stack>
  );
};

export default FilterForm;
