"use client";
import {
  getFilters,
  getFiltersResponse,
} from "@/actions/restaurants/getFilters";
import FilterForm from "@/components/forms/filter/FilterForm";
import useServerAction from "@/hooks/common/useServerAction";
import { useFilterStore } from "@/providers/filter-store-provider";
import { ActionResponse } from "@/types/api";
import {
  Box,
  CircularProgress,
  debounce,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ButtonModal from "../common/buttons/ButtonModal";
import FineTuningIconOutlined from "../icons/outlined/FineTuning";
import SearchIconOutlined from "../icons/outlined/SearchIcon";
import CloseIcon from "@mui/icons-material/Close";

type SearchbarProps = {
  isSearching?: boolean;
};
const Searchbar = ({ isSearching }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState("");
  const t = useTranslations();
  const {
    isPending,
    response: filtersBlocks,
    startAction,
  } = useServerAction<ActionResponse<getFiltersResponse[]>>();
  const { setSearchTerm, searchTerm } = useFilterStore();

  useEffect(() => {
    startAction(getFilters());
  }, [startAction]);
  useEffect(() => {
    debounce(() => {
      if (inputValue.length != 1) {
        setSearchTerm(inputValue);
      }
    }, 1000)();
  }, [inputValue, setSearchTerm]);
  return (
    <TextField
      color="primary"
      placeholder={t("SEARCH_PLACEHOLDER")}
      fullWidth
      value={inputValue}
      onChange={(event) => {
        //remove multiple spaces
        const value = event.target.value.replace(/\s{2,}/g, " ").trimStart();
        setInputValue(value);
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIconOutlined sx={{ fontSize: 22 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <Stack direction="row">
              {isSearching && (
                <CircularProgress
                  size={20}
                  color="inherit"
                  sx={{
                    alignSelf: "center",
                  }}
                />
              )}
              {!isSearching && inputValue && (
                <IconButton
                  aria-label="close"
                  onClick={() => setInputValue("")}
                  disableRipple
                  sx={{
                    alignSelf: "center",
                    p: 0,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
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
                <Box
                  sx={{
                    p: 4,
                  }}
                >
                  <FilterForm filtersBlocks={filtersBlocks?.data ?? []} />
                </Box>
              </ButtonModal>
            </Stack>
          ),
          sx: {
            borderRadius: 4,
            backgroundColor: "common.white",
            height: 40,
          },
        },
      }}
    />
  );
};

export default Searchbar;
