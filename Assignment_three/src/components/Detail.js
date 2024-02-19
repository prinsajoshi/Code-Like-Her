import React from "react";
import RecipeName from "./Details_components/RecipeName";
import RecipeImage from "./Details_components/RecipeImage";
import RecipeArea from "./Details_components/RecipeArea";
import RecipeIngredients from "./Details_components/RecipeIngredients";
import RecipeInstructions from "./Details_components/RecipeInstructions";
import "./Details.css";

// Detail component definition
const Detail = ({ recipe, onBack }) => {
  return (
    <div className="container">
      <button onClick={onBack} className="back-button">
        Back
      </button>
      <div className="recipe-details">  {/* Container for recipe details */}
        <RecipeName name={recipe.strMeal} />
        <RecipeImage imageUrl={recipe.strMealThumb} alt={recipe.strMeal} />
        <RecipeArea
          name={recipe.strMeal}
          area={recipe.strArea}
          category={recipe.strCategory}
        />
        <RecipeIngredients recipe={recipe} />
        <RecipeInstructions instructions={recipe.strInstructions} />
      </div>
    </div>
  );
};

export default Detail;
