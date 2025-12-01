import React from "react";

const MovieInfoSkeleton = ({ stats }) => {
  return (
    <>
      <div className="movie__selected">
        <div className="movie__selected--info__skeleton skeleton"></div>
      </div>
      <div className="movie__selected--description movie__selected--description__skeleton skeleton"></div>
    </>
  );
};

export default MovieInfoSkeleton;
