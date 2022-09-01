import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ itemName, itemCategory, onItemFormSubmit }) {

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory
  }

  function handleChange (event) {
    newItem[event.target.name] = event.target.value;
  }

  return (
    <form className="NewItem" onSubmit={(event) => {
      event.preventDefault();
      onItemFormSubmit(newItem);
    }}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
