import { useEffect, useState } from "react";

const ShowAllCategory = () => {
  const [mealCategories, setMealCategories] = useState([]);

  const fetchApi = async () => {
    const resultApi = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const resultJson = await resultApi.json();

    setMealCategories(resultJson.categories);
  };

  // useEffect permits to reload the fetch api one time, and, don't create infinit loop
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>All meals categories</h1>
      {mealCategories.map((meal) => {
        return (
          <div key={meal.idCategory}>
            <h2>{meal.strCategory}</h2>
            <img src={meal.strCategoryThumb} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default ShowAllCategory;
