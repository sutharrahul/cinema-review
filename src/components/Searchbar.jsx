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

        <div className="form-control w-full ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full rounded-full text-[#ffb86c]"
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
