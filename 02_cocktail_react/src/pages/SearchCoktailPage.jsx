import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../component/Header";

const SearchCoktailPage = () => {
  const [resultSearch, setResultSearch] = useState([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const fetchSearchApi = async () => {
    const responseApi = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    const responseJson = await responseApi.json();

    setResultSearch(responseJson.drinks);
  };

  useEffect(() => {
    fetchSearchApi();
  }, [search]);

  return (
    <>
      <Header />
      <h1>Resultat de votre recherche :</h1>
      <>
        {!resultSearch ? (
          <div className="error">
            <span class="material-symbols-outlined msg-error">error</span>
            <p>Aucun resultat</p>
          </div>
        ) : (
          resultSearch.map((cocktail) => {
            return (
              <>
                <h3>{cocktail.strDrink}</h3>
                <img src={cocktail.strDrinkThumb} alt="" />
              </>
            );
          })
        )}
      </>
    </>
  );
};

export default SearchCoktailPage;
