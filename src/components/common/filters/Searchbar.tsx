"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import ButtonModal from "../compound/ButtonModal";
import FilterForm from "@/components/forms/filter/FilterForm";

const Searchbar = () => {
  return (
    <TextField
      color="primary"
      placeholder="search meal..."
      fullWidth
      sx={{ maxWidth: { xs: "100%", md: "25rem" } }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <ButtonModal
            icon={<TuneIcon />}
            cardProps={{
              sx: {
                alignSelf: { xs: "flex-end", sm: "center" },
                borderRadius: { xs: '1rem 1rem 0 0', sm: 2 },
              },
            }}
          >
            <FilterForm />
          </ButtonModal>
        ),
        sx: {
          borderRadius: 2,
          height: "2.5rem",
          backgroundColor: "common.white",
          border: "1px solid",
          borderColor: "grey.300",
        },
      }}
    />
  );
};

export default Searchbar;
