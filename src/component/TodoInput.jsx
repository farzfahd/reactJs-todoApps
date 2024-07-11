import React, { useState } from "react";

export default function TodoInput(props) {
  const { handler: handlerAddTodos, todoValue, setTodoValue } = props;

  return (
    <div>
      <input
        value={todoValue}
        onChange={(input) => {
          setTodoValue(input.target.value);
        }}
        type="text"
        placeholder="Input todo"
        id="inputTodo"
      ></input>
      <button
        onClick={() => {
          if (todoValue === "") {
            alert("The field can't be empty");
          } else {
            handlerAddTodos(todoValue);
          }
        }}
      >
        Add
      </button>
    </div>
  );
}
