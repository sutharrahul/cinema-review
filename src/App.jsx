import Footer from "./Footer";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import MovieReviewPage from "./components/MovieReviewPage";
import { useState } from "react";
import Searchbar from "./components/Searchbar";
import { movieSearchData } from "./service";

function App() {
  const [data, setData] = useState();
  const nevigate = useNavigate();
  async function onSearch(search) {
    nevigate("/");
    const res = await movieSearchData(search);
    setData(res?.Search);
  }
  return (
    <div>
      <LandingPage>
        <Searchbar onSearch={onSearch} />

        <Routes>
          <Route path="/:movieId" element={<MovieReviewPage />} />
          <Route path="/" element={<Home movieData={data} />} />
        </Routes>
      </LandingPage>
      <Footer />
    </div>
  );
}

export default App;
