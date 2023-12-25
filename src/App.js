
import React from './react' 
import {useState} from './react'
import './App.css';

function App() {
 //state hook - useState 
  const [newItem, setNewItem ] = useState("") ; 
  const [item , setItems] = useState([]); 



  function addItem(){

    if(!newItem){//!newItem means agr newitem nabashad)
      alert("Enter an item.")
      return;
    } 
    const items = {
      id : Math.floor(math.random()* 1000) , 
      value : newItem 
    }
    
    setItems(oldList => [...oldList, item]) ; 
    setNewItem(); 
    console.log(items);
  }


  function deletItem(){
    const newArray = items.filter(item => item.id !== id) ;
    setItems(newArray) ; 
  }


  return (
    <div className="App">

      {/* 1 header */}

      <h1> To do list </h1>

      {/* 2. INPUT BOTTOn */}

      <input 
      type = "text"
      placeholder='add an items...'
      value={newItem}
      onChange= {e => setNewItem(e.target.value) 
      }
      />

      <botton onClick= {() => addItem } > Add </botton>
      
      
      {/* 3.list of items (ul) */}
      
      <ul>
        {items.map(item => {
          return(
            <li key= {item.id}> {item.value} <botton onClick = {()=> deletItem(item.id)}> </botton> </li> 

          )
        })}
      </ul>
    </div>
  );
}

export default App;
