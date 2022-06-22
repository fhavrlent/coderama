import { configureStore } from "@reduxjs/toolkit";
import { favoriteMoviesSlice } from "./features/favoriteMovies/favoriteMoviesSlice";

export const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
