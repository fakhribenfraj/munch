"use client";
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
import ButtonModal from "../common/buttons/ButtonModal";
import FilterForm from "@/components/forms/filter/FilterForm";
import { useTranslations } from "next-intl";
import FineTuningIconOutlined from "../icons/outlined/FineTuning";
import SearchIconOutlined from "../icons/outlined/SearchIcon";

const Searchbar = () => {
  const t = useTranslations();
  return (
    <TextField
      color="primary"
      placeholder={t("SEARCH_PLACEHOLDER")}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIconOutlined sx={{ fontSize: 22 }} />
          </InputAdornment>
        ),
        endAdornment: (
          <ButtonModal
            buttonProps={{ "aria-label": "filters" }}
            icon={<FineTuningIconOutlined />}
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
              <Typography
                component="span"
                variant="h5"
                color="primary"
                fontWeight="bold"
              >
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
