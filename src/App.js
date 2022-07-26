import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const INITIAL_TODO = [
  { id: 1, text: "Learn React Basics", completed: true },
  { id: 2, text: "Learn Redux", completed: false },
  { id: 3, text: "Create a Real World React Project", completed: false },
  { id: 4, text: "Create an SAP React Portal", completed: false },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODO);

  const handleNewTodo = (todo) => {
    const newTodoList = [...todos, todo];

    setTodos(() => newTodoList);
  };

  return (
    <div className="App">
      <NewTodo addTodo={handleNewTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
