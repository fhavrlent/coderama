import { Button, Col, Input, Row, Spin } from "antd";

import { useSearchMovies } from "../../api";

import style from "./Search.module.css";

export const Search = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;
}) => {
  const { refetch, isFetching } = useSearchMovies({
    searchTerm,
  });

  return (
    <>
      <Row justify="center" className={style.row}>
        <Col span={8}>
          <Input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
            placeholder="Search for a movie"
            onPressEnter={() => refetch()}
          />
        </Col>
      </Row>
      <Row justify="center" className={style.row}>
        <Col span={8} className={style.buttonRow}>
          <Button type="default" onClick={() => refetch()}>
            {isFetching ? <Spin /> : "Search"}
          </Button>
        </Col>
      </Row>
    </>
  );
};
