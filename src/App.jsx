import { useState } from "react"
import "./styles.css"


export default function App() {

  //~~newItem~~ is variable that holds new data and renders it to html but immutable
  //~~setNewItem~~ is a method that used to send data to ~~newItem~~
  const [newItem, setNewItem] = useState("");
  const [toDos, setToDos] = useState([])

  //this method is used upon form submission
  function handleSubmit(e) {
    e.preventDefault();

    //taking form submission data and saving each submission on a separate new array
    setToDos(currentToDos => {
      return [
        ...currentToDos, { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    console.log(completed);
    setToDos(currentToDos => {
      return currentToDos.map(todo => {        
        if(todo.id === id){
          return { ...todo, completed}
        }

        return todo;
      })
    })
  }

  function deleteToggle(id) {
    setToDos(currentToDos => {
      //if current ToDo is not equal to previous ToDo I wanna keep it else I will delete it
      return currentToDos.filter(todo => todo.id !== id)
    })
  }
  // console.log(toDos); 
  
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {toDos.map(todo => {
          return <li key={todo.id} >
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => toggleTodo(todo.id, e.target.checked)}
            />
            {todo.title}
          </label>
          <button className="btn btn-danger" onClick={() => deleteToggle(todo.id)}>Delete</button>
        </li>
        })}
      </ul>
    </>
  )
}