import React, { useState } from "react";
import TodoBoard from "../components/TodoBoard";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [inputValue, setInputValue] = useState(""); // 값을 저장할 때 state 사용
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]); // spread 연산자로 기존 아이템 복사해서 유지하기
  };
  return (
    <div className={styles.container}>
      <h1>2023년 6월 20일</h1>
      <h2>오늘 할 일</h2>
      <div className={styles.todo}>
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일"
        />
        <button onClick={addItem}>추가</button>
      </div>
      <div className={styles.list}>
        <TodoBoard todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}
