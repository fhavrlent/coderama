import { Card, Col, Empty, Row, Spin, PageHeader, Image } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import { useFetchMovieById } from "../../api";
import { MovieInfo, MovieTitle, RatingsDetail } from "../../components";

import style from "./MovieDetail.module.css";

export const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useFetchMovieById(id ?? "");

  if (isLoading || !data || data?.Response === "False")
    return (
      <Row justify="center" className={style.noDataRow}>
        <Col>{isLoading ? <Spin size="large" /> : <Empty />}</Col>
      </Row>
    );

  const { Year, Ratings, Poster } = data;

  return (
    <Card
      className={style.movieContent}
      title={
        <PageHeader
          onBack={() => navigate(-1)}
          title={<MovieTitle {...data} />}
          subTitle={Year}
        ></PageHeader>
      }
    >
      <RatingsDetail Ratings={Ratings} />
      <MovieInfo {...data} />
      <Image src={Poster} />
    </Card>
  );
};
