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
    <>
      <h3>{drink.strDrink}</h3>
      <img src={drink.strDrinkThumb} alt="" className="cocktailImg" />
      <button onClick={showIngredient}>Show Ingredient</button>
      {show.length !== 0 &&
        itShow &&
        show.map((ingredient) => {
          return <p>{ingredient}</p>;
        })}
    </>
  );
};
export default SingleCoktail;
