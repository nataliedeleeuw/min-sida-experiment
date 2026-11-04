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

  function removeTodo(id) {
  saveTodos(todos.filter((todo) => todo.id !== id));
}

function clearTodos() {
  saveTodos([]);
}

{todos.length > 0 && (
  <button
    type="button"
    className="todo-rensa"
    onClick={clearTodos}
  >
    Rensa allt
  </button>
)}

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

      <p className="todo-antal">
  {todos.length} {todos.length === 1 ? "sak" : "saker"} att göra
</p>

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