import { useEffect, useState } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistTodos(todos) {
    localStorage.setItem("todos", JSON.stringify({ todos }));
  }

  function handlerAddTodos(todo) {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    persistTodos(newTodos);
  }

  function handlerDeleteTodos(index) {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    persistTodos(newTodos);
  }

  function handlerEditTodo(index) {
    const selectTodo = todos[index];
    setTodoValue(selectTodo);
    handlerDeleteTodos(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handler={handlerAddTodos}
      />
      <TodoList
        todos={todos}
        delHandle={handlerDeleteTodos}
        editHandle={handlerEditTodo}
      />
    </>
  );
}

export default App;
