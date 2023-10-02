import { useEffect, useState } from "react";
import "./style.css";
import NewTodoForm from "./NewTodoForm";
import DisplayList from "./DisplayList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("Items");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    return setTodos((curr) => {
      return [...curr, { id: crypto.randomUUID(), title, completed: false }];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((curr) => {
      return curr.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  const deleteTodo = (id) => {
    setTodos((curr) => {
      return curr.filter((todo) => todo.id !== id);
    });
  };
  // console.log(todos);
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">ToDo List</h1>
      <DisplayList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
