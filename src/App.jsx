import Footer from "./Footer";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import MovieReviewPage from "./components/MovieReviewPage";
import { useState } from "react";
import Searchbar from "./components/Searchbar";
import { movieSearchData } from "./service";
import Heading from "./components/Heading";
import { LoadingEffect } from "./components/Loading";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const nevigate = useNavigate();
  async function onSearch(search) {
    setData(undefined);
    setLoading(true);
    nevigate("/");
    const res = await movieSearchData(search);
    setData(res?.Search);
    setLoading(false);
  }
  return (
    <div>
      <LandingPage>
        <Searchbar onSearch={onSearch} />
        {loading ? <LoadingEffect /> : !data && <Heading />}
        <Routes>
          <Route path="/:movieId" element={<MovieReviewPage />} />
          <Route path="/" element={data && <Home movieData={data} />} />
        </Routes>
      </LandingPage>
      <Footer />
    </div>
  );
}

export default App;
