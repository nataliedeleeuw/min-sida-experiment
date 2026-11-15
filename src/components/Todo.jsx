
import { useState } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";

function loadTodos() {
  try {
    const saved = localStorage.getItem("todos");
    const lista = saved ? JSON.parse(saved) : [];

    return Array.isArray(lista) ? lista : [];
  } catch {
    return [];
  }
}

function Todo() {
  const [todos, setTodos] = useState(loadTodos);
  const [text, setText] = useState("");

  function saveTodos(newTodos) {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function addTodo(e) {
    e.preventDefault();

    const nyText = text.trim();

    if (nyText === "") {
      return;
    }

    saveTodos([
      ...todos,
      {
        id: Date.now(),
        text: nyText,
      },
    ]);

    setText("");
  }

  function removeTodo(id) {
    saveTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  function clearTodos() {
    saveTodos([]);
  }

  return (
    <section className="todo">
      <h2>Testa Kom ihåg-listan</h2>

      <p className="todo-intro">
        Skriv något du vill komma ihåg.
        Dina anteckningar sparas i den här
        webbläsaren och finns kvar när du
        besöker sidan igen.
      </p>

      <form onSubmit={addTodo}>
        <label htmlFor="ny-uppgift">
          Ny påminnelse
        </label>

        <input
          id="ny-uppgift"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Vad vill du komma ihåg?"
          maxLength={120}
        />

        <button type="submit">
          Lägg till
        </button>
      </form>

      <p className="todo-antal" aria-live="polite">
        {todos.length}
        {todos.length === 1
          ? " påminnelse"
          : " påminnelser"}
      </p>

      {todos.length > 0 && (
        <button
          type="button"
          className="todo-rensa"
          onClick={clearTodos}
        >
          Rensa listan
        </button>
      )}

      {todos.length === 0 ? (
        <p className="todo-tom">
          Här är det tomt än så länge.
        </p>
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
