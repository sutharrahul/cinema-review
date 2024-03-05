import Footer from "./Footer";
import LandingPage from "./components/LandingPage";
import MovieReviewPage from "./components/MovieReviewPage";
import Searchbar from "./components/Searchbar";
import SearchResultMovieCard from "./components/SearchResultMovieCard";
import { useEffect, useState } from "react";
import { movieSearchData } from "./service";

function App() {
  const [data, setData] = useState();

  async function onSearch(search) {
    const res = await movieSearchData(search);
    setData(res?.Search);
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <LandingPage>
        <Searchbar onSearch={onSearch} />
        {data?.map((movi) => (
          <SearchResultMovieCard key={movi?.imdbID} movieData={movi} />
        ))}
      </LandingPage>
      {/* <MovieReviewPage /> */}
      <Footer />
    </div>
  );
}

export default App;
