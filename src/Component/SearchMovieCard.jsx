import React from "react";
import ironman from "../assets/ironman.jpg";

function SearchMovieCard() {
  return (
    <div className="flex row items-center border-solid border-2 border-gray-900 py-1 px-1 my-4 w-fit">
      <img className="h-40" src={ironman} alt="" />
      <div className="px-3 flex-col">
        <h3 className="font-bold text-2xl">Iron man</h3>
        <p className="">2008</p>
        <p>Robert Downey Jr., Gwyneth Paltrow</p>
      </div>
    </div>
  );
}

export default SearchMovieCard;
