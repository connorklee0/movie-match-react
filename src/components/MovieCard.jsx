import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, isLoading }) => {
  const navigate = useNavigate();
  function movieInfo() {
    const movieId = movie.imdbID;
    navigate(`/${movieId}`, {
      replace: true,
    });
  }

  return (
    <>
      {isLoading ? (
        <div className="movie movie--skeleton" aria-hidden="true">
          <div className="movie__img--wrapper">
            <div className="skeleton skeleton--img" />
          </div>

          <h3 className="movie__title">
            <div className="skeleton skeleton--title" />
          </h3>
          <h4 className="movie__year highlight">
            <div className="skeleton skeleton--year" />
          </h4>
        </div>
      ) : (
        <div className="movie">
          <figure
            className="movie__img--wrapper"
            onClick={() => {
              movieInfo();
            }}
          >
            <img
              className="movie__img"
              src={movie.Poster}
              draggable="false"
              alt={movie.Title}
            />
            <p className="movie__info--text">More Info →</p>
          </figure>

          <h3 className="movie__title">
            <span className="content">{movie.Title}</span>
          </h3>
          <h4 className="movie__year highlight">
            Year: <span className="content">{movie.Year}</span>
          </h4>
        </div>
      )}
    </>
  );
};

export default MovieCard;
