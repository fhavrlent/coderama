import { useState } from "react";
import { Input, Button, Row, Col } from "antd";

import { useSearchMovies } from "../../api";
import { MovieCard } from "../../components/movieCard";

export const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, refetch, fetchNextPage, hasNextPage } = useSearchMovies({
    searchTerm,
  });

  return (
    <>
      <Row justify="center" style={{ marginBottom: "1rem" }}>
        <Col span={8}>
          <Input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" onClick={() => refetch()}>
            Search
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 8]}>
        {data?.pages.map((page) =>
          page.Search.map((movie) => (
            <Col span={8} key={movie.imdbID}>
              <MovieCard {...movie} />
            </Col>
          ))
        )}
      </Row>
      <Row justify="center">
        <Button
          type="dashed"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage}
        >
          Load More
        </Button>
      </Row>
    </>
  );
};
