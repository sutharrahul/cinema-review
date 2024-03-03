import React from "react";
import banner from "../assets/ironman.jpg";
import { MOVIE_DETAILS_KEY, movieData } from "./const";
import DetailKey from "./DetailKey";
import GenreBadge from "./GenreBadge";

function MovieReview() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl px-4 py-5">
      <figure>
        <img src={movieData.Poster} alt="movie" />
      </figure>
      <div className="card-body">
        <div>
          <div className="flex justify-between w-full">
            <div>
              <h2 className="card-title">Iron Man</h2>
            </div>
            <div>
              <p className="rating py-2">
                <span className="mask mask-star-2 bg-orange-400 h-6 w-6"></span>
                <span className="px-2">9.5/10</span>
              </p>
            </div>
          </div>

          <p>52645125</p>

          <p className="pt-2">
            2008 <span>PG-13</span> <span>Runtime</span>
          </p>
        </div>

        <ul>
          {movieData.Genre?.split(", ")?.map((key) => (
            <GenreBadge key={key} label={key} />
          ))}
        </ul>

        <p className="mb-5">{movieData["Plot"]}</p>
        <div>
          {MOVIE_DETAILS_KEY?.map((key) => (
            <DetailKey key={key} label={key} value={movieData[key]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieReview;
