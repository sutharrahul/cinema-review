import React, { useState } from "react";
import Searchbar from "./Searchbar";
import MovieCard from "./MovieCard";
// import { movieSearchData } from "../service";
function Home({ movieData }) {
  return (
    <div className="font-montserrat h-[73vh]  overflow-x-hidden overflow-y-visible mt-5 w-screen flex flex-col items-center">
      {movieData?.map((movi) => (
        <MovieCard key={movi?.imdbID} movieCard={movi} />
      ))}
    </div>
  );
}

export default Home;
