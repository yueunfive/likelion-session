import React, { useState } from "react";
import styles from "../css/TodoItem.module.css";
import { useRecoilState } from "recoil";
import { recoilInput } from "../store/recoilInput";

function TodoItem(props) {
  const [inputValue, setInputValue] = useRecoilState(recoilInput); // 준규형이 알려준 recoil! 이걸로 바꿔놓지는 말고 알아두기용으로 나두자.
  let [checked, setChecked] = useState(false);
  let style1 = { color: "black" };
  let style2 = { color: "gray", textDecorationLine: "line-through" };

  return (
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
        {/* 수정하기 버튼 구현하기 */}
        <button className={styles.modify} onClick={() => {}}>
          수정
        </button>
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
    </div>
  );
}

export default TodoItem;
