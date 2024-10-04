import { Dispatch } from "@reduxjs/toolkit";

import { eventActions } from "./event.slice";

import { moviesData } from "@app/assets/data/movies";

export const getEventsService = () => (dispatch: Dispatch) => {
  try {
    dispatch(eventActions.setIsLoading(true));
    // API call fetch | axios
    setTimeout(() => {
      const events = moviesData;
      dispatch(eventActions.setEvents(events));
      dispatch(eventActions.setIsLoading(false));
      // dispatch(eventActions.setError(null)); // esto no funciona :'v
      dispatch(eventActions.setError(null)); // esto funciona bien :)  // esto es para resetear el error en caso de que haya un error anterior.
    }, 500);
  } catch (error) {
    console.error('error on get events', error);
    dispatch(eventActions.setError(JSON.stringify(error)));
    dispatch(eventActions.setIsLoading(false));
  }
}