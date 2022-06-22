import { Card, Image } from "antd";
import { Link } from "react-router-dom";

import { MovieType } from "../../api/useSearchMovies";

import style from "./MovieCard.module.css";

export const MovieCard = ({ imdbID, Year, Title, Poster }: MovieType) => (
  <Card
    title={<Link to={`/movie/${imdbID}`}>{Title}</Link>}
    extra={Year}
    className={style.movieCard}
  >
    <Image src={Poster} alt={Title} width="100%" />
  </Card>
);
