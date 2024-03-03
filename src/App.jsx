import Footer from "./Footer";
import LandingPage from "./components/LandingPage";
import MovieReview from "./components/MovieReview";
import SearchMovieCard from "./components/SearchMovieCard";
import Searchbar from "./components/Searchbar";

function App() {
  // useEffect(() => {
  //   movieSearchData("iron");
  // }, []);
  return (
    <div className="flex flex-col h-screen justify-between">
      <LandingPage>
        <Searchbar />
      </LandingPage>
      <SearchMovieCard />
      {/* <MovieReview /> */}
      <Footer />
    </div>
  );
}

export default App;
