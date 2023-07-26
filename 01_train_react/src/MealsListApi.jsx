import { useState, useEffect } from "react";

const MealsListApi = () => {
  const [meals, setMeals] = useState([]);

  const mealsApi = async () => {
    const resultApi = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const resultJson = await resultApi.json();
    setMeals(resultJson.meals);
  };

  useEffect(() => {
    mealsApi();
  }, []);

  return (
    <div className="allMeal">
      <h1>Meal</h1>
      {meals.map((meal) => (
        <div key={meal.idMeal} className="title">
          <h1>{meal.strMeal}</h1>
        </div>
      ))}
    </div>
  );
};

export default MealsListApi;
