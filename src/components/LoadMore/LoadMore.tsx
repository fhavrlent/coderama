import { Button, Row, Spin } from "antd";

import { useSearchMovies } from "../../api";

import style from "./LoadMore.module.css";

export const LoadMore = ({ searchTerm }: { searchTerm: string }) => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = useSearchMovies({
    searchTerm,
  });

  return (
    <Row justify="center" className={style.loadMoreRow}>
      <Button
        type="dashed"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage}
      >
        {isFetchingNextPage ? <Spin /> : "Load More"}
      </Button>
    </Row>
  );
};
