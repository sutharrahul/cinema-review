import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movieCard }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${movieCard?.imdbID}`)}
      className="flex row items-center backdrop-blur-sm border-solid border-2 border-gray-900 py-1 px-1 my-4 w-full lg:w-[50%] mx-5 cursor-pointer"
    >
      <img className="h-40" src={movieCard["Poster"]} alt="" />
      <div className="px-3 flex flex-col items-start ">
        <h3 className="font-bold text-2xl">{movieCard["Title"]}</h3>
        <p>{movieCard["Year"]}</p>
        <p>{movieCard["Type"]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
