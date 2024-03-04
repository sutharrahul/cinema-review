import Footer from "./Footer";
import LandingPage from "./components/LandingPage";
import MovieReviewPage from "./components/MovieReviewPage";
import SearchMovieCard from "./components/SearchMovieCard";
import Searchbar from "./components/Searchbar";

function App() {
  // useEffect(() => {
  //   movieSearchData("iron");
  // }, []);
  return (
    <div className="flex flex-col h-screen justify-between">
      {/* <LandingPage>
        <Searchbar />
      </LandingPage>
      <SearchMovieCard /> */}
      <MovieReviewPage />
      <Footer />
    </div>
  );
}

export default App;
