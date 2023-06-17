import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  return (
    <div>
      {props.todoList.map((item, i) => (
        <TodoItem
          item={item}
          i={i}
          todoList={props.todoList}
          setTodoList={props.setTodoList}
        />
      ))}
    </div>
  );
}

export default TodoBoard;
