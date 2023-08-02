import React, { useState } from "react";
import TodoBoard from "../components/TodoBoard";
import styles from "../css/TodoList.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

// TodoList > TodoBoard > TodoItem

export default function TodoList() {
  let navigate = useNavigate();
  const [inputValue, setInputValue] = useState(""); // 값을 저장할 때 state 사용
  const [todoList, setTodoList] = useState([]);

  // 추가 기능
  // 내용없으면 추가 X
  // spread 연산자로 기존 아이템 복사해서 유지하기
  const addItem = () => {
    if (inputValue != "") {
      setTodoList([...todoList, inputValue]);
    }
  };

  // '추가'하면 input란에 써있는 값 비우기
  const handleSave = () => {
    setInputValue("");
  };

  // Enter 입력이 되면 클릭 이벤트 실행
  const keyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
      handleSave();
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
        <button
          onClick={() => {
            addItem();
            handleSave();
          }}
        >
          추가
        </button>
      </div>
      <div className={styles.list}>
        <TodoBoard
          todoList={todoList}
          setTodoList={setTodoList}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <button className={styles.logout} onClick={() => navigate("/")}>
        로그아웃
      </button>
    </div>
  );
}
