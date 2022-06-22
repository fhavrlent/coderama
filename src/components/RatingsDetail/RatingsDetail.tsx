import { Descriptions } from "antd";

import { MovieDetailDTO } from "../../api/useFetchMovieById";

export const RatingsDetail = ({
  Metascore,
  Ratings,
}: Pick<MovieDetailDTO, "Metascore" | "Ratings">) => (
  <Descriptions title="Ratings">
    <Descriptions.Item label="Metascore">{Metascore}</Descriptions.Item>
    {Ratings.map(({ Source, Value }) => (
      <Descriptions.Item key={Source} label={Source}>
        {Value}
      </Descriptions.Item>
    ))}
  </Descriptions>
);
