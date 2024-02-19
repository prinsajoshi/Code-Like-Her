import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import SearchInput from "./App_components/SearchInput";
import RecipeList from "./App_components/RecipeList";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");  // State for the search query
  const [recipes, setRecipes] = useState([]);  // State for storing fetched recipes
  const [selectedRecipe, setSelectedRecipe] = useState(null);  // State for the selected recipe

  useEffect(() => {
    fetchRecipes();  // Fetch recipes when query state changes
  }, [query]);

  // Function to fetch recipes from the API
  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);  // Update recipes state with fetched data
    } catch (error) { 
      console.error("Error fetching recipes:", error);
    }
  };

  // Function to handle viewing details of a recipe
  const handleViewDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle going back from the detail view
  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      {selectedRecipe ? (
        <Detail recipe={selectedRecipe} onBack={handleBack} />   // Render detail view if a recipe is selected 
      ) : (
        <>  {/* Render search input and recipe list if no recipe is selected */}
          <SearchInput query={query} setQuery={setQuery} />
          <RecipeList recipes={recipes} handleViewDetail={handleViewDetail} />
        </>
      )}
    </div>
  );
};

export default App;
