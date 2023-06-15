import loginImg from "../img/passion.png";

export default function Login() {
  return (
    <div className="login-page">
      <img src={loginImg} alt="" width="500px" />
      <div className="phrase">
        <p>일정관리</p>
        <p>하자 했잖아!</p>
      </div>
      <div className="login">
        <input className="ID" type="text" placeholder="아이디를 입력하세요" />
        <br />
        <input className="PW" type="text" placeholder="비밀번호를 입력하세요" />
        <br />
        <button>로그인</button>
        <p>회원가입 | 아이디 찾기 | 비밀번호 찾기</p>
      </div>
    </div>
  );
}
