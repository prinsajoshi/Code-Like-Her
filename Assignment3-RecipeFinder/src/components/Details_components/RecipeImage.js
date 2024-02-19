import React from "react";

const RecipeImage = ({ imageUrl, alt }) => {
  return <img src={imageUrl} alt={alt} className="custom-image" />;
};

export default RecipeImage;
