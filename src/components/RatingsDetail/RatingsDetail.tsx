import { Descriptions } from "antd";

import { MovieDetailDTO } from "../../api/useFetchMovieById";

export const RatingsDetail = ({ Ratings }: Pick<MovieDetailDTO, "Ratings">) => (
  <Descriptions title="Ratings">
    {Ratings.map(({ Source, Value }) => (
      <Descriptions.Item key={Source} label={Source}>
        {Value}
      </Descriptions.Item>
    ))}
  </Descriptions>
);
