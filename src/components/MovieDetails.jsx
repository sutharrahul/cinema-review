import React from "react";
import { MOVIE_DETAILS_KEY } from "./const";
import GenreBadge from "./GenreBadge";
import DetailKey from "./DetailKey";
import Footer from "../Footer";

function MovieDetails({ movieData }) {
  return (
    <div className="font-montserrat card lg:card-side bg-base-100 shadow-xl px-4 py-5 ">
      <figure>
        <img src={movieData["Poster"]} alt="movie" />
      </figure>
      <div className="card-body">
        <div>
          <div className="flex justify-between w-full">
            <div>
              <h2 className="card-title text-4xl">{movieData["Title"]}</h2>
            </div>
            <div>
              <p className="rating py-2">
                <span className="mask mask-star-2 bg-orange-400 h-6 w-6"></span>
                <span className="px-2">{movieData["imdbRating"]}/10</span>
              </p>
            </div>
          </div>
          <p className="pt-2">
            {movieData["Year"]}{" "}
            <span className="ml-3">{movieData["Rated"]}</span>
            <span className="ml-3">{movieData["Runtime"]}</span>
          </p>
        </div>
        <ul>
          {movieData.Genre?.split(", ")?.map((key) => (
            <GenreBadge key={key} label={key} />
          ))}
        </ul>
        <p className="font-semibold py-5">{movieData["Plot"]}</p>
        <div>
          {MOVIE_DETAILS_KEY?.map((key) => (
            <DetailKey key={key} label={key} value={movieData[key]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
