import React from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import headerImg from "../assets/header.png";

const Home = () => {
  return (
    <>
      <section id="home">
        <header className="header">
          <h1 className="header--title title">
            Find Your <span className="highlight">Favorite Films</span>
          </h1>
          <div className="header--sub-title">Movies at your fingertips</div>
          <SearchBar />
          <figure className="header__img--wrapper">
            <img
              src={headerImg}
              alt="Header"
              className="header__img"
              draggable="false"
            />
          </figure>
        </header>
      </section>
    </>
  );
};

export default Home;
