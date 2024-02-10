import React, { useState } from "react";

const AddItemPage = ({ addItem, navigateTo }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, price, image });
    // Clear input fields after submitting the form
    setName("");
    setPrice("");
    setImage("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="addItemPage">
      <form onSubmit={handleSubmit} className="addItemForm">
        <h2>Add Item</h2>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Add Item</button>
      </form>
      <button className="navigatebutton" onClick={() => navigateTo("list")}>
        Go to Item List
      </button>
    </div>
  );
};

export default AddItemPage;
