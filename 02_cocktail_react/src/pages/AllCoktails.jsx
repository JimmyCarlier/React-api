import { useState, useEffect } from "react";
import SingleCoktail from "../component/SingleCoktail";
import Header from "../component/Header";
const AllCoktails = () => {
  const [showAllCoktail, setShowAllCoktail] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCoktailApi = async () => {
    try {
      const resultAllCoktails = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      const resultCoktailsJson = await resultAllCoktails.json();
      setShowAllCoktail(resultCoktailsJson.drinks);

      setLoading(false);

      //   let mydrinks = resultCoktailsJson["drinks"];
      //   let table = [];
      //   for (let i = 0; i <= mydrinks.length; i++) {
      //     table[i] = [];
      //     for (const key in mydrinks[i]) {
      //       if (mydrinks[i][key] !== null && key.includes("strIngredient")) {
      //         table[i].push(mydrinks[i][key]);
      //       }
      //     }
      //   }
    } catch {}
  };

  useEffect(() => {
    fetchCoktailApi();
  }, []);

  return (
    <>
      <Header />
      <div className="coktails-section">
        {loading ? (
          <p>Loading...</p>
        ) : (
          showAllCoktail.map((drink) => (
            <>
              <SingleCoktail drink={drink} />
            </>
          ))
        )}
      </div>
    </>
  );
};

export default AllCoktails;
