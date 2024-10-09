"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import ButtonModal from "../compound/ButtonModal";

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
          <ButtonModal icon={<TuneIcon />}>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio
              quasi eos adipisci beatae voluptates repudiandae facere
              consequuntur perferendis quia excepturi illum. Non cumque pariatur
              illo quia amet modi fuga.
            </Box>
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
