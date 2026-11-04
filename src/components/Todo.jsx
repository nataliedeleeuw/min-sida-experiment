import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo(e) {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text
      }
    ]);

    setText("");
  }

  return (
    <section className="todo">
      <h2>Min att göra-lista</h2>

      <form onSubmit={addTodo}>
        <label htmlFor="ny-uppgift">
          Ny uppgift
        </label>

        <input
          id="ny-uppgift"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Vad behöver göras?"
        />

        <button type="submit">
          Lägg till
        </button>
      </form>

      {todos.length === 0 ? (
        <p>Inget att göra än.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todo;