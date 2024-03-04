import Footer from "./Footer";
import LandingPage from "./components/LandingPage";
import MovieReviewPage from "./components/MovieReviewPage";
import Searchbar from "./components/Searchbar";
import SearchResultMovieCard from "./components/SearchResultMovieCard";

function App() {
  // useEffect(() => {
  //   movieSearchData("iron");
  // }, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <LandingPage>
        <Searchbar />
      </LandingPage>
      <SearchResultMovieCard />
      {/* <MovieReviewPage /> */}
      <Footer />
    </div>
  );
}

export default App;
