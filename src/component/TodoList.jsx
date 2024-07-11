import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <TodoCard key={index} index={index} {...props}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
