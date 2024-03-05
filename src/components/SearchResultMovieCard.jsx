import React from "react";
// import { movieData } from "./const";

function SearchResultMovieCard({ movieData }) {
  console.log(movieData);
  return (
    <div className="flex row items-center border-solid border-2 border-gray-900 py-1 px-1 my-4 w-full">
      <img className="h-40" src={movieData["Poster"]} alt="" />
      <div className="px-3 flex-col">
        <h3 className="font-bold text-2xl">{movieData["Title"]}</h3>
        <p className="">{movieData["Year"]}</p>
        <p>{movieData["Actors"]?.split(", ")?.slice(0, 2)?.join(", ")}</p>
      </div>
    </div>
  );
}

export default SearchResultMovieCard;
