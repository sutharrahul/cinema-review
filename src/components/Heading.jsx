import React from "react";

function Heading() {
  return (
    <div className="font-montserrat w-screen sticky opacity-75 px-2 py-32">
      <h1 className="text-2xl lg:text-7xl text-center  font-bold flex flex-col items-center">
        Welcome To Cinema Review{" "}
      </h1>
      <p className="text-lg text-center py-4">
        Unlock the magic of movies with CinemaReview - where every film finds
        its perfect rating!
      </p>
    </div>
  );
}

export default Heading;
