import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Card, Col, Empty, Row, Spin, PageHeader, Image } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useFetchMovieById } from "../../api";
import { MovieInfo } from "../../components/MovieInfo";
import { RatingsDetail } from "../../components/RatingsDetail";
import {
  addFavorite,
  isFavorite,
  removeFavorite,
} from "../../store/features/favoriteMovies/favoriteMoviesSlice";
import { MovieType } from "../../api/useSearchMovies";
import { useAppDispatch } from "../../store/hooks";

export const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isFavoriteMovie = useSelector(isFavorite(id));

  const { data, isLoading } = useFetchMovieById(id ?? "");

  if (isLoading)
    return (
      <Row justify="center">
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    );

  if (!data || data?.Response === "False") return <Empty />;

  const { Year, Ratings, Metascore, Poster } = data;

  return (
    <Card
      style={{ margin: "2rem" }}
      title={
        <PageHeader
          onBack={() => navigate(-1)}
          title={<MovieTitle {...data} isFavorite={isFavoriteMovie} />}
          subTitle={Year}
        ></PageHeader>
      }
    >
      <RatingsDetail Metascore={Metascore} Ratings={Ratings} />
      <MovieInfo {...data} />
      <Image src={Poster} />
    </Card>
  );
};

const MovieTitle = ({
  isFavorite,
  Title,
  imdbID,
  ...rest
}: MovieType & {
  isFavorite: boolean;
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {Title}{" "}
      {isFavorite ? (
        <StarFilled onClick={() => dispatch(removeFavorite({ imdbID }))} />
      ) : (
        <StarOutlined
          onClick={() => dispatch(addFavorite({ imdbID, Title, ...rest }))}
        />
      )}
    </>
  );
};
