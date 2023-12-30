import { useState } from "react";
import "./App.css";

let id = 0;

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: ++id,
      title,
      description,
    };
    setTodos([...todos, todo]);
    setTitle("");
    setDescription("");
    console.log(todos);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title </label>
        <input type="text" id="title" value={title} onChange={handleTitle} />
        <br></br>
        <label htmlFor="description"> Description </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescription}
        />
        <br></br>
        <button>Submit</button>
      </form>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className="todo-title"> title :{todo.title}</span>
            <br></br>
            <span className="todo-desc">Description : {todo.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
