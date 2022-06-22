import { Row, Col } from "antd";
import { useSelector } from "react-redux";

import { MovieCard } from "../../components";
import { getFavoriteMovies } from "../../store/features/favoriteMovies/favoriteMoviesSlice";

export const FavoriteMovies = () => {
  const favoriteMovies = useSelector(getFavoriteMovies);

  return (
    <Row gutter={[16, 8]}>
      {favoriteMovies.map((movie) => (
        <Col xl={6} md={8} xs={24} key={movie.imdbID}>
          <MovieCard {...movie} />
        </Col>
      ))}
    </Row>
  );
};
