import { useState } from "react";
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]); 

  function addItem() {
    if (!newItem) {
      alert("enter an item");
      
      return;
    }
    console.log(newItem);
    setItems([...items, newItem]);
   
    setNewItem("");
  }
  function deleteItem(index) {
    const updatedItems = items.filter((item, i) => i !== index); 
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <h1>todo list app</h1>

      <input
        type="text"
        placeholder='enter:...............'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={addItem}>+</button>

      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item}
             <button onClick={() => deleteItem(index)}>✔️</button>
            
            </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
