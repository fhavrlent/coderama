import { Card, Col, Empty, Row, Spin, PageHeader, Image } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import { useFetchMovieById } from "../../api";
import { MovieInfo } from "../../components/MovieInfo";
import { MovieTitle } from "../../components/MovieTitle";
import { RatingsDetail } from "../../components/RatingsDetail";

import style from "./MovieDetail.module.css";

export const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useFetchMovieById(id ?? "");

  if (isLoading)
    return (
      <Row justify="center" className={style.spinRow}>
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    );

  if (!data || data?.Response === "False") return <Empty />;

  const { Year, Ratings, Poster } = data;

  return (
    <Card
      style={{ margin: "2rem" }}
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
