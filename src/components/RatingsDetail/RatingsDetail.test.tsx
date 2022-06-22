import { render, screen } from "@testing-library/react";

import { RatingsDetail } from "./RatingsDetail";

describe("RatingDetail", () => {
  it("should render correctly", () => {
    const { container } = render(
      <RatingsDetail
        Ratings={[
          { Source: "Internet Movie Database", Value: "8.9/10" },
          { Source: "Rotten Tomatoes", Value: "92%" },
          { Source: "Metacritic", Value: "80/100" },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Internet Movie Database")).toBeInTheDocument();
    expect(screen.getByText("Rotten Tomatoes")).toBeInTheDocument();
  });
});
