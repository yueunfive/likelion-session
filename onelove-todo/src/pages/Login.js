import React, { useState } from "react";
import loginImg from "../img/passion.png";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";

export default function Login() {
  let navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 버튼에 적용할 클릭 이벤트 함수
  const handleOnClick = () => {
    navigate("/TodoList");
  };

  // 아이디, 비밀번호 4자 미만 삽입시 경고
  const wordCondition = () => {
    if (id.length < 4 || pw.length < 4) {
      alert("4자 이상 입력하세요!");
      return false;
    }
    return true;
  };

  // 인풋에 적용할 Enter 키 입력 함수
  // Enter 입력이 되면 클릭 이벤트 실행
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      if (wordCondition()) {
        handleOnClick();
      }
    }
  };

  return (
    <div className={styles.loginPage}>
      <img src={loginImg} alt="" width="500px" />
      <div className={styles.loginBox}>
        <div className={styles.phrase}>
          <p>한사랑</p>
          <p>일정관리</p>
        </div>
        <div className={styles.login}>
          <input
            className={styles.ID}
            type="email"
            placeholder="아이디를 입력하세요"
            value={id} // id 값 업데이트
            onChange={(e) => setId(e.target.value)} // id 값을 변경할 때마다 업데이트
          />
          <br />
          <input
            className={styles.PW}
            type="password"
            placeholder="비밀번호를 입력하세요"
            onKeyPress={handleOnKeyPress}
            value={pw} // pw 값 업데이트
            onChange={(e) => setPw(e.target.value)} // pw 값을 변경할 때마다 업데이트
          />
          <br />
          <button onClick={() => wordCondition() && handleOnClick()}>
            로그인
          </button>
          <p>회원가입 | 아이디 찾기 | 비밀번호 찾기</p>
        </div>
      </div>
    </div>
  );
}
