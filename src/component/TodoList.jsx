import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard key={index} index={index} {...props}>
            <li>{todo}</li>
          </TodoCard>
        );
      })}
    </ul>
  );
}
