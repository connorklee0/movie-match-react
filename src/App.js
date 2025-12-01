import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={<SearchMovies />} />
          <Route path="/search/:title" element={<SearchMovies />} />
          <Route path="/:id" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
