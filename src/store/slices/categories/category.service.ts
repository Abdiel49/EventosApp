import { Dispatch } from "@reduxjs/toolkit";

import { categoryActions } from "./category.slice";

import { categoriasEventos } from "@app/assets/data/categorias";

import { ICategory, ICreateCategory } from "@app/types";

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

export const createCategoryService = (category: ICreateCategory) => async (dispatch: Dispatch) => {
  try {
    // API call fetch | axios
    dispatch(categoryActions.setLoading(true));
    const newCategory: ICategory = {
      ...category,
      id: Date.now(), // new Date().getTime()
    }

    setTimeout(() => {
      // aca se manda al servidor y se crea la categoria y se retorna la categoria create
      dispatch( categoryActions.addCategory(newCategory));
      // dispatch( categoryActions.setSelectedCategory(categories[0]));
      dispatch( categoryActions.setLoading(false));
    }, 600);
  } catch (error) {
    console.error('error on create categories', error);
    dispatch( categoryActions.setError( JSON.stringify(error)));
    dispatch( categoryActions.setLoading( false));
  }
}
