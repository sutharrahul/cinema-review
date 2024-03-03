import { useEffect } from "react";
import Searchbar from "./components/Searchbar";
import { movieSearchData } from "./service";
import SearchMovieCard from "./components/SearchMovieCard";
import LandingPage from "./components/LandingPage";
import Card from "./components/Card";
import Footer from "./Footer";
import MovieReview from "./components/MovieReview";

function App() {
  // useEffect(() => {
  //   movieSearchData("iron");
  // }, []);
  return (
    <>
      {/* <LandingPage>
        <Searchbar />
      </LandingPage> */}
      {/* <Card />
      <SearchMovieCard /> */}
      <MovieReview />
      <Footer />
    </>
  );
}

export default App;
