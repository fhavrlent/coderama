import { Descriptions } from "antd";

import { MovieDetailDTO } from "../../api/useFetchMovieById";

export const MovieInfo = ({
  Rated,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Awards,
  Plot,
}: Pick<
  MovieDetailDTO,
  | "Rated"
  | "Runtime"
  | "Genre"
  | "Director"
  | "Writer"
  | "Actors"
  | "Awards"
  | "Plot"
>) => (
  <Descriptions title="Movie Info">
    <Descriptions.Item label="Rated">{Rated}</Descriptions.Item>
    <Descriptions.Item label="Runtime">{Runtime}</Descriptions.Item>
    <Descriptions.Item label="Genre">{Genre}</Descriptions.Item>
    <Descriptions.Item label="Director">{Director}</Descriptions.Item>
    <Descriptions.Item label="Writer">{Writer}</Descriptions.Item>
    <Descriptions.Item label="Actors">{Actors}</Descriptions.Item>
    <Descriptions.Item label="Awards">{Awards}</Descriptions.Item>
    <Descriptions.Item label="Plot">{Plot}</Descriptions.Item>
  </Descriptions>
);
