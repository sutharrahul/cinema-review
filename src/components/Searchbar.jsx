import React, { useState } from "react";
import appimg from "../assets/appIcon.jpeg";
import { useNavigate } from "react-router-dom";

function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");

  return (
    <div className="px-2 lg:px-10 sticky top-3 lg:top-7 z-10 ">
      <div className="navbar bg-base-100 w-full gap-[2px] lg:gap-3 justify-between rounded-full opacity-85">
        <div>
          <a className="overflow-hidden rounded-full" href="/">
            <img
              className=" scale-[130%] h-[50px] lg:h-[50px] "
              src={appimg}
              alt="cinemaReview Icon"
            />
          </a>
        </div>
        <div className="form-control w-full flex-row justify-between">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                onSearch(search);
              }
            }}
            placeholder="Search"
            className="input input-bordered input-accent w-full rounded-full text-[#ffb86c]"
          />
          <button
            onClick={() => onSearch(search)}
            className="btn btn-accent rounded-full  ml-3 overflow-hidden "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
