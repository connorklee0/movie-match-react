import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { useNavigate, useParams } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import MovieInfoCard from "../components/MovieInfoCard";

const MovieInfo = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  function goBack() {
    navigate(`/search/`, {
      replace: true,
    });
  }

  async function fetchMovie() {
    setIsLoading(true);

    // fetch API data
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=b77fdfec&i=${id}`
    );

    if (data.Response === "True") {
      setMovie(data);
      setError("");
    } else {
      setError(data.Error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <>
      <div id="info__body">
        <main id="info__main">
          <div className="info__containe">
            <div className="row">
              <div className="info__top">
                <div className="info__back" onClick={goBack}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
                </div>
                {error ? (
                  <div className="error movie__selected--error">
                    Error: {error}
                  </div>
                ) : (
                  <MovieInfoCard movie={movie} isLoading={isLoading} />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MovieInfo;
