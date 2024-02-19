import React from "react";

const RecipeInstructions = ({ instructions }) => {
  return (
    <>
      <div className="instructions">
        <h3>Instructions:</h3>
        <p>{instructions}</p>
      </div>
    </>
  );
};

export default RecipeInstructions;
