import { useEffect, useState } from "react";
import AllCategories from "./AllCategories";

const ShowAllCategory = () => {
  const [mealCategories, setMealCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mealsByCategory, setMealsByCategory] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);

  const fetchCategoriesApi = async () => {
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

  const handleClick = async (categoryTitle) => {
    const fetchMealsByCategory = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryTitle}`
    );
    const mealsByCategoryJs = await fetchMealsByCategory.json();
    setMealsByCategory(mealsByCategoryJs.meals);
    setSelectedCategoryName(categoryTitle);
  };

  // useEffect permits to reload the fetch api one time, and, don't create infinit loop
  useEffect(() => {
    fetchCategoriesApi();
  }, []);

  return (
    <>
      <h1>All meals categories</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        mealCategories.map((category) => (
          <>
            <h2>{category.strCategory}</h2>
            <img src={category.strCategoryThumb} alt="" />
            <button
              onClick={() => {
                handleClick(category.strCategory);
              }}
            >
              Afficher les catégories en lien
            </button>

            {category.strCategory === selectedCategoryName && (
              <section>
                <AllCategories mealsByCategory={mealsByCategory} />
              </section>
            )}
          </>
        ))
      )}
    </>
  );
};

export default ShowAllCategory;
