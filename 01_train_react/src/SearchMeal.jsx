import React, { useEffect, useState } from "react";

const SearchMeal = () => {
  const [mealsSearch, setmealsSearch] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchByInput = async (event) => {
    event.preventDefault();

    const searchValue = event.target.search.value;

    const findApi = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    );
    const findJson = await findApi.json();

    if (findJson.meals) {
      setmealsSearch(findJson.meals);
    } else {
      setmealsSearch(null);
    }
  };

  const fetchMeal = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const jsonResponse = await response.json();

      setmealsSearch(jsonResponse.meals);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <>
      {loading ? <h1 className="login">Loading...</h1> : null}
      <div className="formSearch">
        <form onSubmit={searchByInput}>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            name="search"
            placeholder="Rechercher votre plat..."
            className="inputSearch"
          />
          <input type="submit" className="subb" />
        </form>
      </div>
      <div className="containerCard">
        {!mealsSearch ? (
          <p>Aucun resultat</p>
        ) : (
          mealsSearch.map((value) => {
            return (
              <div key={value.idMeal} className="mealCard">
                <h1>{value.strMeal}</h1>
                <img
                  src={value.strMealThumb}
                  alt={value.strMeal}
                  className="mealImg"
                ></img>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default SearchMeal;
