import { getFiltersResponse } from "@/actions/restaurants/getFilters";
import ActionForm from "@/components/common/ActionForm";
import RHFRangeInput from "@/components/hook-form/number/RHFRangeInput";
import { useFilterStore } from "@/providers/filter-store-provider";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid2,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const FilterForm = ({
  filtersBlocks,
}: {
  filtersBlocks: getFiltersResponse[];
}) => {
  const { applyFilters, filters } = useFilterStore();

  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = handleSubmit((data) => {
    applyFilters(data);
  });
  useEffect(() => {
    methods.reset(filters);
  }, [filters, methods]);
  return (
    <ActionForm methods={methods} onSubmit={onSubmit}>
      <Stack spacing={4}>
        {filtersBlocks.map((block) => (
          <React.Fragment key={block.category}>
            <Stack spacing={3}>
              <Typography variant="h6" fontWeight="medium" gutterBottom>
                {block.category}
              </Typography>
              <Grid2 container spacing={4} sx={{ px: 4 }}>
                {block.inputs.map((inputItem) => (
                  <Grid2
                    size={{
                      xs: 12,
                    }}
                    key={inputItem.name}
                  >
                    {inputItem.type == "range" && (
                      <Stack key={inputItem.label}>
                        <Typography>{inputItem.label}</Typography>
                        <Stack alignItems="center">
                          <Typography width="100px">from 15 to 30</Typography>
                          <RHFRangeInput
                            name={inputItem.name}
                            min={inputItem.min}
                            max={inputItem.max}
                            disableSwap
                          />
                        </Stack>
                      </Stack>
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
                    {/* {inputItem.type == "autocomplete" && (
                      <Autocomplete
                        limitTags={2}
                        multiple
                        options={inputItem.options}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.label}
                        renderOption={(
                          { key, ...props },
                          option,
                          { selected }
                        ) => (
                          <li key={key} {...props}>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              checked={selected}
                              sx={{ mr: 1 }}
                            />
                            {option.label}
                          </li>
                        )}
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
                            label={inputItem.label}
                            placeholder="Type to search"
                            variant="outlined"
                          />
                        )}
                      />
                    )} */}
                  </Grid2>
                ))}
              </Grid2>
            </Stack>
            <Divider />
          </React.Fragment>
        ))}

        {/* Ratings */}
        <Stack gap={3}>
          <Typography variant="h6" fontWeight="medium" gutterBottom>
            Ratings
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <Typography variant="body1" gutterBottom>
                {4.5}
              </Typography>
              <Rating name={`rating`} defaultValue={5} size="large" />
            </Grid2>
          </Grid2>
        </Stack>
      </Stack>
      <ButtonGroup sx={{ mt: 4 }}>
        <Button variant="soft" type="reset">
          reset
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </ButtonGroup>
    </ActionForm>
  );
};

export default FilterForm;
