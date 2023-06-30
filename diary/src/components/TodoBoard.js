import React from "react";
import TodoItem from "./TodoItem";
import styles from "../css/TodoBoard.module.css";

function TodoBoard(props) {
  return (
    <div className={styles.TodoBoard}>
      {props.todoList.map((item, i) => (
        <TodoItem
          item={item}
          i={i}
          todoList={props.todoList}
          setTodoList={props.setTodoList}
          inputValue={props.inputValue}
          setInputValue={props.setInputValue}
        />
      ))}
    </div>
  );
}

export default TodoBoard;
