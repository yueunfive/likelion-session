import React, { useState } from "react";
import styles from "../css/TodoItem.module.css";

function TodoItem(props) {
  let [checked, setChecked] = useState(false);
  let [hidden, setHidden] = useState(true);
  let style1 = { color: "black" };
  let style2 = { color: "gray", textDecorationLine: "line-through" };

  // 삭제 기능 (체크박스 연동)
  const deleteItem = () => {
    setHidden(false);
  };

  // 수정 기능
  const changeItem = () => {
    let copy = [...props.todoList];
    copy.splice(props.i, 1, props.inputValue);
    props.setTodoList(copy);
  };

  return (
    <div>
      {hidden && (
        <div className={styles.todoItem}>
          <div>
            <input
              className={styles.checkbox}
              type="checkbox"
              onChange={() => {
                setChecked(!checked);
              }}
            />
            <span style={checked ? style2 : style1}>{props.item}</span>
          </div>
          <div>
            {/* 자세히 버튼 구현하기 -> 옆에 다른 창 띄우기(피드백 적는 메모장 + 이모지 삽입 기능) */}
            <button className={styles.detail} onClick={() => {}}>
              자세히
            </button>
            <button
              className={styles.modify}
              onClick={() => {
                changeItem();
              }}
            >
              수정
            </button>
            <button
              onClick={() => {
                deleteItem();
              }}
            >
              삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
