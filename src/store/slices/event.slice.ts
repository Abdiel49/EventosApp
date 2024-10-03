import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../../types";

type EventsSliceState = {
  events: IEvent[]
  selectedEvent: IEvent | undefined,
  isLoading: boolean,
  error: string | null,
  // searchTerm: string,
  // currentPage: number,
  // totalPages: number,
  favoriteEvents: IEvent[]
};

const initialState: EventsSliceState = {
  events: [],
  selectedEvent: undefined,
  isLoading: false,
  error: null,
  // searchTerm: '',
  // currentPage: 1,
  // totalPages: 1,
  favoriteEvents: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<IEvent[]>) => {
      state.events = action.payload;
    },
    setSelectedEvent(state, action: PayloadAction<IEvent>) {
      state.selectedEvent = action.payload;
    },
    addFavoriteEvent(state, action: PayloadAction<IEvent>) {
      const event = action.payload;
      if (!state.favoriteEvents.some(e => e.id === event.id)) {
        state.favoriteEvents = [...state.favoriteEvents, event];
      }
    },
    removeFavoriteEvent(state, action: PayloadAction<IEvent>) {
      state.favoriteEvents = state.favoriteEvents.filter(
        (e) => e.id!== action.payload.id
      );
    },
  },
})

export const EventActions = eventsSlice.actions;

export const EventReducer = eventsSlice.reducer;
