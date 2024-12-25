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
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ButtonModal from "../common/buttons/ButtonModal";
import FineTuningIconOutlined from "../icons/outlined/FineTuning";
import SearchIconOutlined from "../icons/outlined/SearchIcon";
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
  return (
    <TextField
      color="primary"
      placeholder={t("SEARCH_PLACEHOLDER")}
      fullWidth
      value={inputValue}
      onChange={(event) => {
        const value = event.target.value.replace(/\s{2,}/g, " ").trimStart();
        setInputValue(value);
        debounce(() => {
          if (value.length != 1) {
            setSearchTerm(value);
          }
        }, 1000)();
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIconOutlined sx={{ fontSize: 22 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <Stack direction="row" spacing={1}>
              {isSearching && (
                <CircularProgress
                  size={20}
                  color="inherit"
                  sx={{
                    alignSelf: "center",
                  }}
                />
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
