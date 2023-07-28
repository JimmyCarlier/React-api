import { useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
const RandomCocktailPage = () => {
  const [random, setRandom] = useState({});

  const RandomCocktail = async () => {
    const randomFetch = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const randomJson = await randomFetch.json();
    setRandom(randomJson.drinks[0]);
  };

  return (
    <>
      <Header />
      <div className="randomCock">
        <button onClick={RandomCocktail}>Random Coktail</button>
        <h3>{random.strDrink}</h3>
        <img src={random.strDrinkThumb} alt="" className="cocktailImg" />
        <Link to={`/RandomCocktailPage/${random.idDrink}`}>
          <button>Details</button>
        </Link>
      </div>
    </>
  );
};

export default RandomCocktailPage;
