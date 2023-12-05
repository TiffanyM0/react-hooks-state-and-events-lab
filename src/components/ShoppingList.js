import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("");

  // const [filtered, setFiltered] = useState([])

  function handleChange(e){
    const value = e.target.value;
    setSelectedCategory(value);

    console.log(selectedCategory)
    
    // const filterBy = items.filter(items => items.category === selectedCategory);

    // console.log(filterBy);

    // setFiltered(filterBy);
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
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
