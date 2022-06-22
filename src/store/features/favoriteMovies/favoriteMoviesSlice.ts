import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MovieType } from "../../../api/useSearchMovies";
import { RootState } from "../../store";

type FavoriteMoviesState = {
  movies: MovieType[];
};

const initialState: FavoriteMoviesState = {
  movies: [],
};

export const favoriteMoviesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<MovieType>) => {
      state.movies.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<{ imdbID: string }>) => {
      state.movies = state.movies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteMoviesSlice.actions;

export const isFavorite = (imdbID?: string) => (state: RootState) =>
  !!state.favoriteMovies.movies.find((movie) => movie.imdbID === imdbID);

export const getFavoriteMovies = (state: RootState) =>
  state.favoriteMovies.movies;
