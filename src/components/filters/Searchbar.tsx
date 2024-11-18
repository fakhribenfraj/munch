"use client";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import ButtonModal from "../common/buttons/ButtonModal";
import FilterForm from "@/components/forms/filter/FilterForm";
import { useTranslations } from "next-intl";

const Searchbar = () => {
  const t = useTranslations();
  return (
    <TextField
      color="primary"
      placeholder={t("SEARCH_PLACEHOLDER")}
      fullWidth
      sx={{ maxWidth: { xs: "100%", md: "70%", lg: "50%" } }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <ButtonModal
            buttonProps={{ "aria-label": "filters" }}
            icon={<TuneIcon />}
            cardProps={{
              sx: {
                alignSelf: { xs: "flex-end", sm: "center" },
                "& .MuiPaper-root ": {
                  m: 0,
                  borderRadius: { xs: "1rem 1rem 0 0", sm: 2 },
                },
              },
            }}
          >
            <DialogTitle>filter</DialogTitle>
            <DialogContent sx={{ maxHeight: "calc(90vh - 160px)" }}>
              <FilterForm />
            </DialogContent>
            <DialogActions>
              <Button>seach</Button>
            </DialogActions>
          </ButtonModal>
        ),
        sx: {
          borderRadius: 2,
          height: "2.5rem",
          backgroundColor: "common.white",
        },
      }}
    />
  );
};

export default Searchbar;
