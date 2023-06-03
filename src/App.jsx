import { useState } from "react"
import "./styles.css"


export default function App() {

  //~~newItem~~ is variable that holds new data and renders it to html but immutable
  //~~setNewItem~~ is a method that used to send data to ~~newItem~~
  const [newItem, setNewItem] = useState("");
  const [toDos, setToDo] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    //~~...~~ spread operator helps chreating a new copy of an array "...arrayName"
    setToDo(currentToDo => {
      return [
        ...currentToDo, { id: crypto.randomUUID(), title: newItem, completed: false}
      ]
    });

    console.log(toDos);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}