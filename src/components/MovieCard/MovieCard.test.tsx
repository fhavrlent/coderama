import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MovieCard } from "./MovieCard";

describe("MovieCard", () => {
  it("should render correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <MovieCard
          imdbID="tt0111161"
          Year="1911"
          Type="movie"
          Title="The Shawshank Redemption"
          Poster="https://m.media-amazon.com/images/M/MV5BODQwMjU4NzY1MF5BMl5BanBnXkFtZTgwMDU2MjQ5NzM@._V1_SX300.jpg"
        />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();

    expect(screen.getByText("The Shawshank Redemption")).toBeInTheDocument();
    expect(screen.getByText("1911")).toBeInTheDocument();
  });
});
