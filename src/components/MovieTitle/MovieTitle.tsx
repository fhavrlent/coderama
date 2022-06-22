import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import { MovieType } from "../../api/useSearchMovies";
import {
  addFavorite,
  isFavorite,
  removeFavorite,
} from "../../store/features/favoriteMovies/favoriteMoviesSlice";
import { useAppDispatch } from "../../store/hooks";

export const MovieTitle = ({ Title, imdbID, ...rest }: MovieType) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {Title}{" "}
      {useSelector(isFavorite(imdbID)) ? (
        <StarFilled onClick={() => dispatch(removeFavorite({ imdbID }))} />
      ) : (
        <StarOutlined
          onClick={() => dispatch(addFavorite({ imdbID, Title, ...rest }))}
        />
      )}
    </>
  );
};
