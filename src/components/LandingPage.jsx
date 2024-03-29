import React from "react";
import backgroundVideo from "../assets/bgVideo.webm";
function LandingPage({ children }) {
  return (
    <section className="showcase h-screen flex justify-center text-white bg-black relative overflow-x-hidden ">
      <div className="video-container absolute inset-0 overflow-hidden">
        <video
          src={backgroundVideo}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          autoPlay
          muted
          loop
        />
        <div className="overlay absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="content w-full relative z-10">{children}</div>
    </section>
  );
}

export default LandingPage;
