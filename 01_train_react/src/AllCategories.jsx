const AllCategories = ({ mealsByCategory }) => {
  return (
    <>
      {mealsByCategory.map((meal) => (
        <h3>{meal.strMeal}</h3>
      ))}
    </>
  );
};

export default AllCategories;
