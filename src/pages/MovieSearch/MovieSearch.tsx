import { useState } from "react";
import { Input, Button, Row, Col, Card, Image, Space } from "antd";

import { useSearchMovies } from "../../api";

export const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, refetch, fetchNextPage, hasNextPage } = useSearchMovies({
    searchTerm,
    page: 1,
  });
  console.log(data);
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
              <Card title={movie.Title} extra={`${movie.Year}, ${movie.Type}`}>
                <Space
                  direction="horizontal"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Image src={movie.Poster} alt={movie.Title} width={200} />
                </Space>
              </Card>
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
