import AllCoktails from "./pages/AllCoktails";
import RandomCocktailPage from "./pages/RandomCoktailPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchCoktailPage from "./pages/SearchCoktailPage";
import DetailsCocktail from "./pages/DetailsCocktail";
import CategoryDrink from "./pages/CategoryDrink";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allCoktails" element={<AllCoktails />} />
          <Route path="/RandomCocktailPage" element={<RandomCocktailPage />} />
          <Route path="/searchCocktail" element={<SearchCoktailPage />}></Route>
          <Route
            path="/categoryCocktails/:categoryName"
            element={<CategoryDrink />}
          ></Route>
          <Route path="/DetailCocktail/:id" element={<DetailsCocktail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
