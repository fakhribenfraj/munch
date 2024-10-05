"use client";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

const Searchbar = () => {
  return (
    <TextField
      color="warning"
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
        },
      }}
    />
  );
};

export default Searchbar;
