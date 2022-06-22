import { Row, Col, Empty } from "antd";

import { useSearchMovies } from "../../api";
import { MovieCard, Search, LoadMore } from "../../components";
import { useSearchParams } from "react-router-dom";

export const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("searchTerm") ?? "";

  const { data, isFetching } = useSearchMovies({
    searchTerm,
  });

  return (
    <>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={(newSearchTerm) =>
          setSearchParams({ searchTerm: newSearchTerm })
        }
      />
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
