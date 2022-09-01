import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [itemList, setItemList] = useState(items);

  function handleCategoryChange (event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange (event) {
    setSearch(event.target.value);
  }

  function handleSubmit (newItem) {
    setItemList([...itemList, newItem]);
  }

  const itemsToDisplay = itemList.filter((item) => {
    if ((item.name.toUpperCase()).includes(search.toUpperCase())) {
      if (selectedCategory === 'All') return true;
      if (item.category === selectedCategory) return true;
      return false;
    }
    return false;
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
        name=''
        category='Produce'
        onItemFormSubmit={handleSubmit}
      />
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
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
