import {
  getFilters,
  getFiltersResponse,
} from "@/actions/restaurants/getFilters";
import RangeInput from "@/components/common/inputs/RangeInput";
import useServerAction from "@/hooks/useServerAction";
import { useFilterStore } from "@/providers/filter-store-provider";
import { ActionResponse } from "@/types/api";
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
  } = useServerAction<ActionResponse<getFiltersResponse[]>>();

  useEffect(() => {
    startAction(getFilters());
  }, [startAction]);
  return (
    <Stack spacing={4}>
      {filtersBlocks?.data.map((block) => (
        <Box key={block.category}>
          <Stack gap={3}>
            <Typography variant="h6" fontWeight="medium" gutterBottom>
              {block.category}
            </Typography>
            <Grid2 container spacing={2} sx={{ px: 4 }}>
              {block.inputs.map((inputItem) => (
                <Grid2
                  size={{
                    xs: 12,
                  }}
                  key={inputItem.name}
                >
                  {inputItem.type == "range" && (
                    <Stack key={inputItem.label} spacing={4}>
                      <Typography>{inputItem.label}</Typography>
                      <Stack spacing={2} alignItems="center">
                        <Typography width="100px">from 15 to 30</Typography>
                        <RangeInput
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
                  {inputItem.type == "autocomplete" && (
                    <Autocomplete
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
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Typography variant="body1" gutterBottom>
              {4.5}
            </Typography>
            <Rating name={`rating`} defaultValue={5} size="large" />
          </Grid2>
        </Grid2>
      </Stack>
    </Stack>
  );
};

export default FilterForm;
