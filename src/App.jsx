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
  const [error, setError] = useState("");
  const nevigate = useNavigate();
  async function onSearch(search) {
    setError(undefined);
    setData(undefined);
    setLoading(true);
    nevigate("/");
    const { Search, errorMessage } = await movieSearchData(search);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setData(Search);
      setLoading(false);
    }
  }
  return (
    <div>
      <LandingPage>
        <Searchbar onSearch={onSearch} />
        {loading ? <LoadingEffect /> : !data && <Heading />}
        <h3 className="text-center text-3xl font-semibold font-montserrat w-screen sticky opacity-75">
          {error}
        </h3>

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
