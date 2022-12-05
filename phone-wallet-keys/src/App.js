import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Item from './components/Item'

function App() {
  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  function handleChange(event){
    setInput(event.target.value)
  }

  function addItem(){
    setItems(prevItems => [...prevItems, input])
    setInput("")
  }

  function removeItem(){
    // setItems(items.filter(item => item.key !== id))
    console.log("clicked!")
  }

  function clearItems(){
    setItems([])
  }

  console.log(items)
  return (
    <>
    <header>
      <input className="itemInput" type="text" value={input} onChange={handleChange}/>
      <button onClick={addItem}>Add</button>
      <button onClick={clearItems}>Clear All</button>
      <Item  onClick={removeItem} items={items} />
    </header>
    </>
  );
}

export default App;
