import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MovieSearch } from "./pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieSearch />} />
      {/*   <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/favorites" element={<FavoriteMovies />} /> */}
    </Routes>
  </BrowserRouter>
);
