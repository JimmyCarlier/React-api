import { useEffect, useState } from "react";
import Header from "../component/Header";
import { useParams } from "react-router-dom";

const DetailsCocktail = () => {
  const [showDetails, setShowDetails] = useState({});
  const { id } = useParams();

  const fecthDetail = async () => {
    const resultFetch = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const resultJson = await resultFetch.json();

    setShowDetails(resultJson.drinks[0]);
  };

  useEffect(() => {
    fecthDetail();
  }, []);

  return (
    <>
      <Header />
      <h2>{showDetails.strDrink}</h2>
      <img src={showDetails.strDrinkThumb} alt="" />
    </>
  );
};

export default DetailsCocktail;
