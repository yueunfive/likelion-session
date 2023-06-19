import loginImg from "../img/passion.png";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/TodoList");
  };
  // 버튼에 적용할 클릭 이벤트 함수

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  // 인풋에 적용할 Enter 키 입력 함수

  return (
    <div className={styles.loginPage}>
      <img src={loginImg} alt="" width="500px" />
      <div className={styles.phrase}>
        <p>일정관리</p>
        <p>하자 했잖아</p>
      </div>
      <div className={styles.login}>
        <input
          className={styles.ID}
          type="email"
          placeholder="아이디를 입력하세요"
        />
        <br />
        <input
          className={styles.PW}
          type="password"
          placeholder="비밀번호를 입력하세요"
          onKeyPress={handleOnKeyPress}
        />
        <br />
        <button onClick={handleOnClick}>로그인</button>
        <p>회원가입 | 아이디 찾기 | 비밀번호 찾기</p>
      </div>
    </div>
  );
}
