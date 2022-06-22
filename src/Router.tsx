import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FavoriteMovies, LayoutPage, MovieDetail, MovieSearch } from "./pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
