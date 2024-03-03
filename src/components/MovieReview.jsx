import React from "react";
import banner from "../assets/ironman.jpg";
import { DETAILS_KEY, movieData } from "./const";
import DetailKey from "./DetailKey";

function MovieReview() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={banner} alt="movie" />
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
          <li className="badge badge-secondary badge-outline mr-2">Action</li>
          <li className="badge badge-secondary badge-outline mr-2">
            Adventure
          </li>
          <li className="badge badge-secondary badge-outline mr-2">Sci-Fi</li>
        </ul>

        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repellendus asperiores ea esse eius reiciendis, illum quia quo ipsa
          dolores non dicta quam quae quis quaerat assumenda? Perferendis,
          suscipit sint.
        </p>
        {DETAILS_KEY?.map((key) => (
          <DetailKey label={key} value={movieData[key]} />
        ))}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}

export default MovieReview;
