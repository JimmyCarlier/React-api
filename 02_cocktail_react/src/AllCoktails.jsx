import { useState, useEffect } from "react";
import SingleCoktail from "./SingleCoktail";
const AllCoktails = () => {
  const [showAllCoktail, setShowAllCoktail] = useState();
  const [loading, setLoading] = useState(true);
  const [random, setRandom] = useState([]);

  const fetchCoktailApi = async () => {
    try {
      const resultAllCoktails = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      const resultCoktailsJson = await resultAllCoktails.json();
      setShowAllCoktail(resultCoktailsJson.drinks);

      setLoading(false);

      //   let mydrinks = resultCoktailsJson["drinks"];
      //   let table = [];
      //   for (let i = 0; i <= mydrinks.length; i++) {
      //     table[i] = [];
      //     for (const key in mydrinks[i]) {
      //       if (mydrinks[i][key] !== null && key.includes("strIngredient")) {
      //         table[i].push(mydrinks[i][key]);
      //       }
      //     }
      //   }
    } catch {}
  };

  const RandomCocktail = async () => {
    const randomFetch = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const randomJson = await randomFetch.json();
    setRandom(randomJson.drinks[0]);
  };

  useEffect(() => {
    fetchCoktailApi();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        showAllCoktail.map((drink) => (
          <>
            <SingleCoktail drink={drink} />
          </>
        ))
      )}
      <div className="randomCock">
        <button onClick={RandomCocktail}>Random Coktail</button>
        <h3>{random.strDrink}</h3>
        <img src={random.strDrinkThumb} alt="" className="cocktailImg" />
      </div>
    </>
  );
};

export default AllCoktails;
