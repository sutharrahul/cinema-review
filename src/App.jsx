import Footer from "./Footer";
import LandingPage from "./components/LandingPage";
import MovieReviewPage from "./components/MovieReviewPage";
import Searchbar from "./components/Searchbar";
import SearchResultMovieCard from "./components/SearchResultMovieCard";
import { useEffect, useState } from "react";
import { movieReviewData, movieSearchData } from "./service";

function App() {
  const [data, setData] = useState();
  const [movieData, setMovieData] = useState();

  async function onSearch(search) {
    const res = await movieSearchData(search);
    setData(res?.Search);
  }

  async function movieCardData(id) {
    const cardResponce = await movieReviewData(id);
    setMovieData(cardResponce);
    console.log(cardResponce);
  }
  return (
    <div className="flex flex-col h-screen justify-between">
      <LandingPage>
        <Searchbar onSearch={onSearch} />
        {data?.map((movi) => (
          <SearchResultMovieCard
            key={movi?.imdbID}
            movieCard={movi}
            movieCardData={() => movieCardData(movi?.imdbID)}
          />
        ))}
      </LandingPage>
      <MovieReviewPage movieData={movieData} />
      <MovieReviewPage />
      <Footer />
    </div>
  );
}

export default App;
