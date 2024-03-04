import React from "react";
import appimg from "../assets/appIcon.jpeg";

function Searchbar() {
  return (
    <div className="px-7 sticky top-5">
      <div className="navbar bg-base-100 w-full gap-3 justify-between rounded-full pr-[14px] mt-5 opacity-85">
        <div>
          <div className="overflow-hidden rounded-full">
            <img className="scale-[130%] h-[50px]" src={appimg} alt="" />
          </div>
        </div>

        <div className="form-control w-full flex-row justify-between">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full rounded-full text-[#ffb86c]"
          />
          <button className="btn btn-accent rounded-full ml-3">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
