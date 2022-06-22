import { useQuery } from "react-query";

import { API_KEY } from "./config";
import { MovieType } from "./useSearchMovies";

type Rating = {
  Source: string;
  Value: string;
};

export type MovieDetailDTO = MovieType & {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: ReadonlyArray<Rating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export const useFetchMovieById = (id: string) =>
  useQuery(
    ["movieDetail", id],
    async () => {
      const response = await fetch(
        `http://omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      const data: MovieDetailDTO = await response.json();
      return data;
    },
    {
      enabled: !!id,
    }
  );
