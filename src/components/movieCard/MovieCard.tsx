import { Card, Space, Image } from "antd";
import { Link } from "react-router-dom";

import { MovieType } from "../../api/useSearchMovies";

export const MovieCard = ({ imdbID, Year, Type, Title, Poster }: MovieType) => (
  <Card
    title={<Link to={`/movie/${imdbID}`}>{Title}</Link>}
    extra={`${Year}, ${Type}`}
  >
    <Space
      direction="horizontal"
      style={{ width: "100%", justifyContent: "center" }}
    >
      <Image src={Poster} alt={Title} width={200} />
    </Space>
  </Card>
);
