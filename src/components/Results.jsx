import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const Results = ({ title }) => {
  const [filter, setFilter] = useState();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchMovies() {
    setIsLoading(true);

    // fetch API data
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=b77fdfec&s=${title}`
    );

    if (data.Response === "True") {
      setMovies(data["Search"].slice(0, 6));
      setError("");
    } else {
      setError(data.Error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, [title]);

  function renderMovies() {
    return movies.map((movie, index) => (
      <MovieCard movie={movie} key={index} isLoading={isLoading} />
    ));
  }

  function sortMovies(event) {
    console.log(event);
  }
  //     if (filter === "LOW_TO_HIGH") {
  //       return movies.sort((a, b) => {
  //         const yearA = parseInt(a.Year.match(/\d{4}/)?.[0] || "0");
  //         const yearB = parseInt(b.Year.match(/\d{4}/)?.[0] || "0");
  //         return yearA - yearB;
  //       });
  //     } else if (filter === "HIGH_TO_LOW") {
  //       return movies.sort((a, b) => {
  //         const yearA = parseInt(a.Year.match(/\d{4}/)?.[0] || "0");
  //         const yearB = parseInt(b.Year.match(/\d{4}/)?.[0] || "0");
  //         return yearB - yearA;
  //       });
  //     } else {
  //       return movies;
  //     }
  //   }

  //   function filterMovies(event) {
  //     const filter = event.target.value;
  //     const storedSearch = localStorage.getItem("search"); // Get fresh search value

  //     localStorage.setItem("filter", filter);
  //     renderMovies(storedSearch);
  //   }

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
          defaultValue={"default"}
          onChange={(e) => sortMovies(e)}
        >
          <option value="default" disabled>
            Sort by Year
          </option>
          <option value="LOW_TO_HIGH">Year, Oldest to Newest</option>
          <option value="HIGH_TO_LOW">Year, Newest to Oldest</option>
        </select>
      </div>
      <div className="movies__list">
        {!title && (
          <div className="highlight results__load--text">
            Search a movie title to get started!
          </div>
        )}

        {title && error && (
          <div className="highlight results__load--text">{error}</div>
        )}

        {title && !error && renderMovies()}
      </div>
    </section>
  );
};

export default Results;
