import { useState } from "react";
import uuid from "react-uuid";

const NewTodo = ({ addTodo, setTodos }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    const todo = {
      id: uuid(),
      text: item,
      completed: false,
    };
    addTodo(todo);

    setItem(() => "");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="text">New To Do Item</label>
      <input
        placeholder="Type a todo item"
        className="form-input"
        type="text"
        value={item}
        onChange={(e) => setItem(() => e.target.value)}
      />
      <input className="form-submit" type="submit" value="Add Todo" />
    </form>
  );
};

export default NewTodo;
