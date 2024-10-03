import { Dispatch } from "@reduxjs/toolkit";

import { categoryActions } from "./category.slice";

import { categoriasEventos } from "../../../assets/data/categorias";

import { ICategory } from "../../../types";

export const getCategoriesService = () => async (dispatch: Dispatch) => {
  console.log('getCategoriesService called')
  try {
    // API call fetch | axios
    dispatch(categoryActions.setLoading(true));
    setTimeout(() => {
      const categories: ICategory[] = categoriasEventos
      // categoryActions.setCategories(categories); // esto no funciona :'v
      dispatch( categoryActions.setCategories(categories));
      dispatch( categoryActions.setSelectedCategory(categories[0]));
      dispatch(categoryActions.setLoading(false));
    }, 2000);
  } catch (error) {
    console.error('erron on get categories', error);
    dispatch(categoryActions.setLoading(false));
  }
}