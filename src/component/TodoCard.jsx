import React from "react";

export default function TodoCard(props) {
  const { children, index, delHandle: handlerDelTodos, editHandle: handlerEditTodo } = props;
  return (
    <div>
      {children}
      <div>
        <button onClick={() => handlerDelTodos(index)}>
          <i class="fa-solid fa-trash"></i>
        </button>
        <button onClick={() => handlerEditTodo(index)}>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  );
}
