import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState("");

  function searchMovie(event) {
    event.preventDefault();

    navigate(`/search/${searchTitle || ""}`, {
      replace: true,
    });
  }

  return (
    <form
      id="search-bar"
      className="search--wrapper"
      onSubmit={(event) => searchMovie(event)}
    >
      <input
        id="search--input"
        type="text"
        className="search"
        placeholder="Search by movie title"
        required
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <button className="search--submit" type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchBar;
