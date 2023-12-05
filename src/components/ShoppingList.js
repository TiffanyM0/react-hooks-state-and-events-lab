import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("");

  const [filtered, setFiltered] = useState(items)

  function handleChange(e){
    const value = e.target.value;

    setSelectedCategory(value);
    
    // console.log(selectedCategory)
    // const filterdList = items.filter(items => items.category === selectedCategory);
    const filterdList = items.filter(items => items.category === value);
    const list = value === "All" ? items : filterdList;
    // console.log(list)
    setFiltered(list);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
