import React from "react";

const RecipeList = ({ recipes, handleViewDetail }) => {
  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal}>
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <button onClick={() => handleViewDetail(recipe)}>View</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
