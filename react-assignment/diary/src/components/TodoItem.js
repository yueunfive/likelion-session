import React, { useState } from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  let [checked, setChecked] = useState(false);
  let style1 = { color: "black" };
  let style2 = { color: "gray", textDecorationLine: "line-through" };

  return (
    <div className={styles.todoItem}>
      <div>
        <input
          type="checkbox"
          onChange={() => {
            setChecked(!checked);
            // 체크박스 클릭하면 맨 위로(배열 맨 앞으로) 가게 하고 싶음..
          }}
        />
        <span style={checked ? style2 : style1}>{props.item}</span>
      </div>
      <button
        onClick={() => {
          let copy = [...props.todoList];
          copy.splice(props.i, 1);
          props.setTodoList(copy);
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
