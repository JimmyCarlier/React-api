import { useEffect, useState } from "react";
import Header from "../component/Header";
import { useParams } from "react-router-dom";

const CategoryDrink = () => {
  const { categoryName } = useParams();

  const [cocktails, setCocktails] = useState([]);

  const fetchCategory = async () => {
    const resultFetch = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    const resultJson = await resultFetch.json();

    setCocktails(resultJson.drinks);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <Header />
      <div className="Laurian">
        {cocktails.map((cocktail) => {
          return (
            <div className="singleCocktail">
              <img src={cocktail.strDrinkThumb} alt="" className="singleImg" />
              <h2>{cocktail.strDrink}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryDrink;
