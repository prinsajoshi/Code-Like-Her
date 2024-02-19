import React from "react";

const RecipeArea = ({ name, area, category }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Area: {area}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default RecipeArea;
