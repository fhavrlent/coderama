import { useState } from "react";
import { Row, Col, Empty } from "antd";

import { useSearchMovies } from "../../api";
import { MovieCard, Search, LoadMore } from "../../components";

export const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isFetching } = useSearchMovies({
    searchTerm,
  });

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {(!data && !isFetching) || data?.pages[0].Response === "False" ? (
        <Empty />
      ) : (
        <Row gutter={[16, 8]}>
          {data?.pages.map((page) =>
            page.Search.map((movie) => (
              <Col xl={6} md={8} xs={24} key={movie.imdbID}>
                <MovieCard {...movie} />
              </Col>
            ))
          )}
        </Row>
      )}
      {data && data?.pages[0].Response !== "False" && (
        <LoadMore searchTerm={searchTerm} />
      )}
    </>
  );
};
