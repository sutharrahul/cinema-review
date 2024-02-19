import { useEffect } from "react";
import Searchbar from "./Component/Searchbar";
import { movieSearchData } from "./service";
import SearchMovieCard from "./Component/SearchMovieCard";
import LandingPage from "./Component/LandingPage";

function App() {
  // useEffect(() => {
  //   movieSearchData("iron");
  // }, []);
  return (
    <>
      {/* <SearchMovieCard /> */}
      <LandingPage>
        <Searchbar />
      </LandingPage>
    </>
  );
}

export default App;
