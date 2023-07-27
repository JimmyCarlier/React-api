import { useEffect, useState } from "react";

const ShowAllCategory = () => {
  const [mealCategories, setMealCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const resultApi = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const resultJson = await resultApi.json();
      setMealCategories(resultJson.categories);
      setLoading(false);
    } catch {
      setLoading(true);
    }
  };

  // useEffect permits to reload the fetch api one time, and, don't create infinit loop
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>All meals categories</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        mealCategories.map((meal) => (
          <>
            <h2>{meal.strCategory}</h2>
            <img src={meal.strCategoryThumb} alt="" />
          </>
        ))
      )}
    </>
  );
};

export default ShowAllCategory;
