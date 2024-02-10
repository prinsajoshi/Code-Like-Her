import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemListPage = ({ items, navigateTo }) => {
  const [apiProducts, setApiProducts] = useState([]);
  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {          // Sends GET request to API endpoint and awaits response
        const response = await axios.get("https://dummyjson.com/products");    // Sets apiProducts state with products data from response
        setApiProducts(response.data?.products);
      } catch (error) {
        console.error("Error fetching products:", error);  // Logs error message if fetching data fails
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="itemlist">Item List</h2>
      <button className="goToAddButton" onClick={() => navigateTo("add")}>
        Go Back to Add Item
      </button>

      <div className="itemListPage">
        {/* Rendering existing items */}
        {items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-info">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
            </div>
          </div>
        ))}

        {/* Rendering API fetched products */}
        {apiProducts.map((product, index) => (
          <div key={index} className="card">
            <img src={product.thumbnail} alt={product.title} />
            <div className="card-info">
              <h3>{product.title}</h3>
              <p>Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListPage;
