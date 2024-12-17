"use server";
import { ActionResponse } from "@/types/api";
type FilterInput = {
  name: string;
  label: string;
} & (
  | {
      type: "autocomplete";
      placeholder?: string;
      options: { label: string; value: number }[];
    }
  | {
      type: "checkbox";
      options: string[];
    }
  | {
      type: "range";
      min: number;
      max: number;
    }
  | {
      type: "rating";
    }
);
export type getFiltersResponse = {
  category: string;
  inputs: FilterInput[];
};
export const getFilters = async () => {
  //   const resData = await secureFetch(endpoints.RESTAURANTS);
  const generalPreferences: FilterInput[] = [
    {
      name: "distance",
      label: "Distance",
      type: "range",
      min: 1,
      max: 100,
    },
    {
      name: "Price",
      label: "Price",
      type: "range",
      min: 1,
      max: 120,
    },
  ];
  const restaurantPreferences: FilterInput[] = [
    {
      name: "style",
      label: "style",
      type: "autocomplete",
      options: [
        { label: "Calm", value: 0 },
        { label: "Normal", value: 1 },
        { label: "Antique", value: 2 },
        { label: "Bar", value: 3 },
      ],
    },
    {
      name: "space",
      label: "space",
      type: "autocomplete",
      options: [
        { label: "Terrace", value: 0 },
        { label: "Smoking Area", value: 1 },
        { label: "Kids Space", value: 2 },
      ],
    },

    {
      name: "services",
      label: "services",
      type: "autocomplete",
      options: [
        { label: "WiFi", value: 0 },
        { label: "Takeout", value: 1 },
        { label: "Reservation", value: 2 },
        { label: "Delivery", value: 3 },
      ],
    },
  ];
  const foodPreferences: FilterInput[] = [
    // {
    //   name: "type",
    //   label: "Type",
    //   type: "autocomplete",
    //   options: [
    //     { label: "Meat", value: 0 },
    //     { label: "Fruit", value: 1 },
    //     { label: "Bread", value: 2 },
    //     { label: "Drinks", value: 3 },
    //     { label: "Veggies", value: 4 },
    //     { label: "Dairy", value: 5 },
    //   ],
    // },
    {
      name: "cuisine",
      label: "cuisine",
      type: "autocomplete",
      options: [
        { label: "Italian", value: 0 },
        { label: "Indian", value: 1 },
        { label: "Mexican", value: 2 },
        { label: "Chinese", value: 3 },
        { label: "Tunisian", value: 4 },
        { label: "French", value: 5 },
        { label: "Japanese", value: 6 },
        { label: "Spanish", value: 7 },
        { label: "Turkish", value: 8 },
        { label: "Lebanese", value: 9 },
      ],
    },
    // {
    //   name: "cooking-style",
    //   label: "Cooking Style",
    //   type: "autocomplete",
    //   options: [
    //     { label: "Grilled", value: 0 },
    //     { label: "Fried", value: 1 },
    //     { label: "Baked", value: 2 },
    //     { label: "Steamed", value: 3 },
    //     { label: "Raw", value: 4 },
    //   ],
    // },
    // {
    //   name: "size",
    //   label: "Size",
    //   type: "checkbox",
    //   options: ["1 Person", "2 Persons", "4 Persons", "5+ Persons"],
    // },

    // {
    //   name: "time",
    //   label: "Cooking Time",
    //   type: "checkbox",
    //   options: ["Quick (15min)", "Medium (15-60min)", "Slow-Cooked (+60min)"],
    // },
    // {
    //   name: "ingredients",
    //   label: "Exclude ingredients",
    //   type: "autocomplete",
    //   options: [
    //     { label: "tomato", value: 0 },
    //     { label: "potato", value: 1 },
    //     { label: "garlic", value: 2 },
    //     { label: "onion", value: 3 },
    //     { label: "meat", value: 4 },
    //     { label: "cheese", value: 5 },
    //     { label: "lettuce", value: 6 },
    //     { label: "peanut", value: 7 },
    //   ],
    // },
  ];
  const data: getFiltersResponse[] = [
    {
      category: "general",
      inputs: generalPreferences,
    },
    // {
    //   category: "restaurant Preferences",
    //   inputs: restaurantPreferences,
    // },
    {
      category: "food Preferences",
      inputs: foodPreferences,
    },
  ];
  return {
    data,
  } as ActionResponse<getFiltersResponse[]>;
};
