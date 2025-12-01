import React from "react";
import MovieInfoSkeleton from "./MovieInfoSkeleton";

const MovieInfoCard = ({ movie, isLoading }) => {
  const stats = [
    { label: "Year", value: movie.Year },
    { label: "iMDb Rating", value: movie.imdbRating },
    { label: "iMDb Votes", value: movie.imdbVotes },
    { label: "Box Office", value: movie.BoxOffice },
    { label: "Runtime", value: movie.Runtime },
    { label: "Writer", value: movie.Writer },
    { label: "Actors", value: movie.Actors },
  ];

  return (
    <>
      {isLoading ? (
        <MovieInfoSkeleton stats={stats} />
      ) : (
        <>
          <div className="movie__selected">
            <figure className="movie__selected__img--wrapper">
              <img src={movie.Poster} alt="" className="movie__selected__img" />
            </figure>
            <div className="movie__selected--info">
              <div className="movie__selected--title">{movie.Title}</div>
              {stats.map(({ label, value }) => (
                <div key={label} className="movie__selected--stat">
                  {label}: <span className="selected__content">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="movie__selected--description">{movie.Plot}</div>
        </>
      )}
    </>
  );
};

export default MovieInfoCard;
