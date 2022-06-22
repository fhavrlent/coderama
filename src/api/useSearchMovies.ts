import { useInfiniteQuery } from "react-query";

import { API_KEY } from "./config";

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

export const useSearchMovies = ({
  searchTerm,
  page,
}: {
  searchTerm: string;
  page: number;
}) =>
  useInfiniteQuery(
    ["search", searchTerm, page],
    async ({ pageParam = 1 }) => {
      const response = await fetch(
        `http://omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&page=${pageParam}`
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
