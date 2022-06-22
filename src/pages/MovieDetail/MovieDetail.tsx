import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Card, Col, Empty, Layout, Row, Spin, PageHeader, Image } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useNavigate, useParams } from "react-router-dom";

import { useFetchMovieById } from "../../api";
import { MovieInfo } from "../../components/MovieInfo";
import { RatingsDetail } from "../../components/RatingsDetail";

export const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isFavorite = true;

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

  const { Title, Year, Ratings, Metascore, Poster } = data;

  return (
    <Layout>
      <Content>
        <Card
          style={{ margin: "2rem" }}
          title={
            <PageHeader
              onBack={() => navigate("/")}
              title={<MovieTitle title={Title} isFavorite={isFavorite} />}
              subTitle={Year}
            ></PageHeader>
          }
        >
          <RatingsDetail Metascore={Metascore} Ratings={Ratings} />
          <MovieInfo {...data} />
          <Image src={Poster} />
        </Card>
      </Content>
    </Layout>
  );
};

const MovieTitle = ({
  title,
  isFavorite,
}: {
  title: string;
  isFavorite: boolean;
}) => (
  <>
    {title} {isFavorite ? <StarFilled /> : <StarOutlined />}
  </>
);
