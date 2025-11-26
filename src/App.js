import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={<SearchMovies />} />
          <Route path="/search/:title" element={<SearchMovies />} />
          <Route path="/:id" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
