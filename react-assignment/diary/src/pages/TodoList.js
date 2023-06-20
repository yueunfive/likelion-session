import React, { useState } from "react";
import TodoBoard from "../components/TodoBoard";
import styles from "../css/TodoList.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TodoList() {
  const [inputValue, setInputValue] = useState(""); // 값을 저장할 때 state 사용
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]); // spread 연산자로 기존 아이템 복사해서 유지하기
  };
  const handleSave = () => {
    setInputValue(""); // input란에 써있는 값 비우기
  };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      addItem(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  }; // 인풋에 적용할 Enter 키 입력 함수
  const [startDate, setStartDate] = useState(new Date()); // datepicker

  return (
    <div className={styles.container}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy년 MM월 dd일"
        className={styles.datePicker}
      />
      <h2>오늘 할 일</h2>
      <div className={styles.todo}>
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일"
          onKeyPress={keyPress}
        />
        <button onClick={addItem}>추가</button>
      </div>
      <div className={styles.list}>
        <TodoBoard
          todoList={todoList}
          setTodoList={setTodoList}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
}
