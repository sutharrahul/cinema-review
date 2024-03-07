import React, { useState } from "react";
import Searchbar from "./Searchbar";
import MovieCard from "./MovieCard";
// import { movieSearchData } from "../service";

function Home({ movieData }) {
  return (
    <>
      {movieData?.map((movi) => (
        <MovieCard key={movi?.imdbID} movieCard={movi} />
      ))}
    </>
  );
}

export default Home;
