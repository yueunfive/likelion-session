import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [inputValue, setInputValue] = useState(""); // 값을 저장할 때 state 사용
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]); // spread 연산자로 기존 아이템 복사해서 유지하기
  };
  return (
    <div className="App">
      <main>
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>추가</button>
      </main>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
