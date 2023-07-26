import { useEffect, useState } from "react";

const SingleMeal = () => {
  const [oneMeal, setOneMeal] = useState(null);

  const fetchApi = async () => {
    const resultApi = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const resultJson = await resultApi.json();
    setOneMeal(resultJson.meals[0]);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {oneMeal ? (
        <div className="singleMeal" key={oneMeal.idMeal}>
          <h1>{oneMeal.strMeal}</h1>
        </div>
      ) : (
        <>
          <h1>Chargement...</h1>
        </>
      )}
    </>
  );
};

export default SingleMeal;
