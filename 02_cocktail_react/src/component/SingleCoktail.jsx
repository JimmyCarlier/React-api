import { useState } from "react";

const SingleCoktail = ({ drink }) => {
  const [show, setShow] = useState([]);
  const [itShow, setItShow] = useState(false);

  const showIngredient = () => {
    let table = [];
    for (let n in drink) {
      if (n.includes("strIngredient") && drink[n] != null) {
        table.push(drink[n]);
      }
    }
    setShow(table);
    setItShow(!itShow);
  };

  return (
    <article className="cocktail-card">
      <img src={drink.strDrinkThumb} alt="" className="cocktailImg" />
      <h3>{drink.strDrink}</h3>
      <button onClick={showIngredient} className="btn ingr-btn">
        Show Ingredient
      </button>
      {show.length !== 0 &&
        itShow &&
        show.map((ingredient) => {
          return <p>{ingredient}</p>;
        })}
    </article>
  );
};
export default SingleCoktail;
