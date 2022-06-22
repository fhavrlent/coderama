import { useInfiniteQuery } from "react-query";

import { API_KEY, API_URL } from "./config";

export type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type Response = {
  Search: ReadonlyArray<MovieType>;
  totalResults: string;
  Response: string;
};

export const useSearchMovies = ({ searchTerm }: { searchTerm: string }) =>
  useInfiniteQuery(
    ["search", searchTerm],
    async ({ pageParam = 1 }) => {
      const response = await fetch(
        `${API_URL}/?s=${searchTerm}&apikey=${API_KEY}&page=${pageParam}&type=movie`
      );
      const data: Response = await response.json();
      return data;
    },
    {
      enabled: false,
      keepPreviousData: true,
      getNextPageParam: (page, pages) => {
        const { totalResults } = page;
        const maxPages = Math.ceil(parseInt(totalResults) / 10);
        return pages.length < maxPages ? pages.length + 1 : undefined;
      },
    }
  );
