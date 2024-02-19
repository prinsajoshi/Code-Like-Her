import React, { useState } from "react";
import AddItemPage from "./AddItemPage";
import ItemListPage from "./ItemListPage";

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState("add"); // Default to 'add' page

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Conditional rendering based on the route */}
      {currentPage === "add" && (
        <AddItemPage addItem={addItem} navigateTo={navigateTo} />
      )}
      {currentPage === "list" && (
        <ItemListPage items={items} navigateTo={navigateTo} />
      )}
    </div>
  );
};

export default App;
