import { Dispatch } from "@reduxjs/toolkit";

import { categoryActions } from "./category.slice";

import { categoriasEventos } from "@app/assets/data/categorias";

import { ICategory } from "@app/types";

export const getCategoriesService = () => async (dispatch: Dispatch) => {
  try {
    // API call fetch | axios
    dispatch(categoryActions.setLoading(true));

    setTimeout(() => {
      const categories: ICategory[] = categoriasEventos
      // categoryActions.setCategories(categories); // esto no funciona :'v
      dispatch( categoryActions.setCategories(categories));
      dispatch( categoryActions.setSelectedCategory(categories[0]));
      dispatch( categoryActions.setLoading(false));
    }, 400);
  } catch (error) {
    console.error('error on get categories', error);
    dispatch( categoryActions.setError( JSON.stringify(error)));
    dispatch( categoryActions.setLoading( false));
  }
}