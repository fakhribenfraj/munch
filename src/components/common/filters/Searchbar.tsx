"use client";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

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
