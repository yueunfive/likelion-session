import React, { useState } from "react";
import TodoBoard from "../components/TodoBoard";

export default function TodoList() {
  const [inputValue, setInputValue] = useState(""); // 값을 저장할 때 state 사용
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]); // spread 연산자로 기존 아이템 복사해서 유지하기
  };
  return (
    <main>
      <h1>2023년 6월 20일</h1>
      <h3 style={{ color: "grey" }}>화요일</h3>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </main>
  );
}
