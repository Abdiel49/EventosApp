import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICategory } from "../../../types";

type EventsSliceState = {
  category: ICategory[]
  selectedCategory: ICategory | undefined
  isLoading: boolean,
};

const initialState: EventsSliceState = {
  category: [],
  selectedCategory: undefined,
  isLoading: false,
};

export const categorySlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.category = action.payload;
      // state.selectedCategory = action.payload[0]
    },
    setSelectedCategory(state, action: PayloadAction<ICategory>) {
      state.selectedCategory = action.payload;
    },
    addCategory(state, action: PayloadAction<ICategory>) {
      state.category = [...state.category, action.payload];
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  }
});

export const categoryActions = categorySlice.actions;

export const CategoryReduer = categorySlice.reducer;
