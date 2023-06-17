import React, { useState } from "react";

function TodoItem(props) {
  let [checked, setChecked] = useState(false);
  let style1 = { color: "black" };
  let style2 = { color: "gray", textDecorationLine: "line-through" };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <span style={checked ? style2 : style1}>{props.item}</span>
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
