import React from "react";

const RecipeIngredients = ({ recipe }) => {
  return (
    <>
      <h3>Ingredients:</h3>
      <ul className="ingredients-list">
        {Object.entries(recipe)
          .filter(([key, value]) => key.startsWith("strIngredient") && value)
          .map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
      </ul>
    </>
  );
};

export default RecipeIngredients;
