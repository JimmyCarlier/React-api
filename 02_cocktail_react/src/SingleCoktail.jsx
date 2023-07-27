const SingleCoktail = ({ drink }) => {
  let table = [];
  for (let n in drink) {
    if (n.includes("strIngredient") && drink[n] != null) {
      table.push(drink[n]);
    }
  }
  return (
    <>
      <h3>{drink.strDrink}</h3>
      <img src={drink.strDrinkThumb} alt="" className="cocktailImg" />
      {table.map((ingredient) => {
        return <p>{ingredient}</p>;
      })}
    </>
  );
};
export default SingleCoktail;
