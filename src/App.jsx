import Footer from "./Footer";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieReviewPage from "./components/MovieReviewPage";
import { useState } from "react";
import Searchbar from "./components/Searchbar";
import { movieSearchData } from "./service";

function App() {
  const [data, setData] = useState();

  async function onSearch(search) {
    const res = await movieSearchData(search);
    setData(res?.Search);
  }
  return (
    <div>
      <LandingPage>
        <Searchbar onSearch={onSearch} />
      </LandingPage>
      <BrowserRouter>
        <Routes>
          <Route path="/:movieId" element={<MovieReviewPage />} />
          <Route path="/" element={<Home movieData={data} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
