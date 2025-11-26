import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currLocation, setCurrLocation] = useState(location.pathname);

  useEffect(() => {
    setCurrLocation(location.pathname);
  }, [location]);

  return (
    <nav>
      <div className="logo" onClick={() => navigate("/")}>
        Movie Match
      </div>
      <ul className="nav__link--list">
        <li
          className={`nav__link link__hover-underline ${
            currLocation === "/" && "highlight"
          }`}
        >
          <p className="nav__link--anchor" onClick={() => navigate("/")}>
            Home
          </p>
        </li>
        <li
          className={`nav__link link__hover-underline ${
            currLocation.includes("/search") && "highlight"
          }`}
        >
          <p className="nav__link--anchor" onClick={() => navigate("/search/")}>
            Find Movies
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
