import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICategory } from "@app/types";

type EventsSliceState = {
  categories: ICategory[]
  selectedCategory: ICategory | undefined
  isLoading: boolean,
  error: string | undefined,
};

const initialState: EventsSliceState = {
  categories: [],
  selectedCategory: undefined,
  isLoading: false,
  error: undefined,
};

export const categorySlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
      // state.selectedCategory = action.payload[0]
    },
    setSelectedCategory(state, action: PayloadAction<ICategory>) {
      state.selectedCategory = action.payload;
    },
    addCategory(state, action: PayloadAction<ICategory>) {
      state.categories = [...state.categories, action.payload];
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clean: (state) => {
      state.error = undefined;
      state.isLoading = false;
      // state.categories = [];
      // state.selectedCategory = state.categories[0];
      // state.selectedCategory = undefined;

    },
  }
});

export const categoryActions = categorySlice.actions;

export const CategoryReduer = categorySlice.reducer;
