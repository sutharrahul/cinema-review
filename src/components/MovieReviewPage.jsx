import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDataById } from "../service";
import { LoadingEffect } from "./Loading";
import MovieDetails from "./MovieDetails";

function MovieReviewPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDataById(movieId);
  }, [movieId]);

  async function fetchMovieDataById(id) {
    setLoading(true);
    const data = await movieDataById(id);
    setMovieData(data);
    setLoading(false);
  }

  return (
    <>{loading ? <LoadingEffect /> : <MovieDetails movieData={movieData} />}</>
  );
}

export default MovieReviewPage;
