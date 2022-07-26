import React from "react";
import uuid from "react-uuid";

const TodoList = ({ todos }) => {
  return (
    <div className="list-container">
      <ul className="list">
        {todos.map((todo) => (
          <li
            key={uuid()}
            className={todo.completed ? "list-item checked" : "list-item"}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
