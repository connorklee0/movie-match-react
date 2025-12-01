import React, { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import { useParams } from "react-router-dom";

const SearchMovies = () => {
  const { title } = useParams();

  return (
    <>
      <header className="header">
        <h1 className="header--title title">
          Browse <span className="highlight">Movies</span>
        </h1>
        <SearchBar />
      </header>
      <hr />
      <Results title={title} />
    </>
  );
};

export default SearchMovies;
