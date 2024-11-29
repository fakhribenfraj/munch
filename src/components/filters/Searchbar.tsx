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
  Typography,
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
            variant="slide"
            cardProps={{
              sx: {
                alignSelf: { xs: "flex-end", sm: "center" },
                "& .MuiPaper-root ": {
                  m: 0,
                  width: { xs: "100%", sm: "calc(100% - 64px)" },
                  borderRadius: { xs: "1rem 1rem 0 0", sm: 2 },
                },
              },
            }}
          >
            <DialogTitle>
              <Typography variant="h5" color="primary" fontWeight="bold">
                Filters
              </Typography>
            </DialogTitle>
            <DialogContent sx={{ maxHeight: "calc(90vh - 160px)" }}>
              <FilterForm />
            </DialogContent>
            <DialogActions>
              <Button variant="soft">reset</Button>
              <Button variant="contained" color="primary">
                Seach
              </Button>
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
