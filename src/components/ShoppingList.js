import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  
  function handleCategoryChange (event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch (event) {
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    }
    return false;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={handleSearch}
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
