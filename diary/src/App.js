import "./App.css";
import React, { useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
