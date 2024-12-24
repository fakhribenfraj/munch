// src/stores/Filter-store.ts
import { createStore } from "zustand/vanilla";

export type FilterState = {
  filters?: any;
  searchTerm?: string;
};

export type FilterActions = {
  reset: () => void;
  applyFilters: (filters: any) => void;
  setSearchTerm: (searchTerm: string) => void;
};

export type FilterStore = FilterState & FilterActions;

const defaultInitState: FilterState = {
  filters: {},
  searchTerm: "",
};

export const initFilterStore = (): FilterState => {
  return {
    filters: {},
    searchTerm: "",
  };
};

export const createFilterStore = (
  initState: FilterState = defaultInitState
) => {
  return createStore<FilterStore>()((set) => ({
    ...initState,
    reset: () => set(defaultInitState),
    applyFilters: (filters) => {
      console.log(filters);
      set((state) => ({
        ...state,
        filters,
      }));
    },
    setSearchTerm: (searchTerm: string) => {
      set((state) => ({
        ...state,
        searchTerm,
      }));
    },
  }));
};
