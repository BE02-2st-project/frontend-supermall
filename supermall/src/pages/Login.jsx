import React from "react";

function Login() {
    return (
        <div>
            <h1>로그인</h1>
            <hr />
            <div>
                <form action="">
                    <input type="email" placeholder="아이디" id="id" />
                    <input type="password" placeholder="비밀번호" id="pw" />
                    <input type="checkbox" id="save-id" />
                    <label htmlFor="아이디 저장" id="save-id"></label>
                    <button>로그인</button>
                </form>
                <div>
                    <button>네이버 로그인</button>
                    <button>카카오 로그인</button>
                </div>
                <div>
                    <button>아이디 찾기</button>
                    <button>비밀번호 찾기</button>
                </div>
                <hr />
                <p>
                    지금 바로 회원가입하고 <span>특별한 혜택</span> 받기
                </p>
                <button>회원가입</button>
            </div>
        </div>
    );
}

export default Login;
