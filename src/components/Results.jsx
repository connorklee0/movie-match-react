import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Results = ({ title }) => {
  const [filter, setFilter] = useState("DEFAULT");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  function applySorting(moviesToSort, sortFilter) {
    if (!sortFilter || sortFilter === "DEFAULT") return moviesToSort;

    return [...moviesToSort].sort((a, b) => {
      const yearA = parseInt(a.Year.toString().match(/\d{4}/)?.[0] || "0");
      const yearB = parseInt(b.Year.toString().match(/\d{4}/)?.[0] || "0");
      return sortFilter === "LOW_TO_HIGH" ? yearA - yearB : yearB - yearA;
    });
  }

  function renderMovies() {
    return movies.map((movie, index) => (
      <MovieCard movie={movie} key={index} isLoading={isLoading} />
    ));
  }

  async function fetchMovies() {
    setIsLoading(true);

    // fetch API data
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=b77fdfec&s=${title}`
    );

    if (data.Response === "True") {
      const fetchedMovies = data["Search"].slice(0, 6);
      const sortedMovies = applySorting(fetchedMovies, filter);
      setMovies(sortedMovies);
      setError("");
    } else {
      setError(data.Error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, [title]);

  useEffect(() => {
    if (movies.length > 0) {
      const sortedMovies = applySorting(movies, filter);
      setMovies(sortedMovies);
    }
  }, [filter]);

  return (
    <section className="results">
      <div className="results__header">
        <div className="results__header--title">
          Search results:{" "}
          <span className="results__header--search highlight"></span>
        </div>
        <select
          name=""
          id="filter"
          defaultValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            Sort by Year
          </option>
          <option value="LOW_TO_HIGH">Year, Oldest to Newest</option>
          <option value="HIGH_TO_LOW">Year, Newest to Oldest</option>
        </select>
      </div>
      {isLoading && (
        <FontAwesomeIcon
          icon={faSpinner}
          className="results__loading--spinner"
        />
      )}

      {!isLoading && (
        <div className="movies__list">
          {!title && (
            <div className="highlight results__load--text">
              Search a movie title to get started!
            </div>
          )}

          {title && error && (
            <div className="error results__load--text">Error: {error}</div>
          )}

          {title && !error && renderMovies()}
        </div>
      )}
    </section>
  );
};

export default Results;
