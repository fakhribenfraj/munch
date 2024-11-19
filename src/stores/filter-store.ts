// src/stores/Filter-store.ts
import { createStore } from 'zustand/vanilla'

export type FilterState = {
  count: number
}

export type FilterActions = {
  reset: () => void
  incrementCount: () => void
}

export type FilterStore = FilterState & FilterActions

export const initFilterStore = (): FilterState => {
  return { count: new Date().getFullYear() }
}

export const defaultInitState: FilterState = {
  count: 0,
}

export const createFilterStore = (
  initState: FilterState = defaultInitState,
) => {
  return createStore<FilterStore>()((set) => ({
    ...initState,
    reset: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }))
}
