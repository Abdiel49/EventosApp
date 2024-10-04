import { configureStore } from '@reduxjs/toolkit';

import { EventReducer } from './slices/events/event.slice';
import { CategoryReduer } from './slices/categories/category.slice';

export const store = configureStore({
  reducer: {
    events: EventReducer,
    categories: CategoryReduer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
