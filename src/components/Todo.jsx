import { useState } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";

function loadTodos() {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
}

function Todo() {
  const [todos, setTodos] = useState(loadTodos());
  const [text, setText] = useState("");

  function saveTodos(newTodos) {
  setTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
}

  function addTodo(e) {
    e.preventDefault();

    if (text.trim() === "") {
        function removeTodo(id) {
  setTodos(todos.filter((todo) => todo.id !== id));
}
      return;
    }

    saveTodos([
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
            <TodoItem
            key={todo.id}
            text={todo.text}
            onRemove={() => removeTodo(todo.id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todo;