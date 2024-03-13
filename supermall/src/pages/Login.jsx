import React, { useState, useReducer } from "react";
import styled from "styled-components";
import naverLogo from "../assets/naver_logo.png";
import kakoLogo from "../assets/kakao_logo.png";
import InputBox from "../components/User/InputBox";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
    margin: 3rem 2rem;
    button {
        border-radius: 5px;
        font-weight: 500;
        width: 100%;
        height: 3rem;
        cursor: pointer;
    }
`;

const ContainerTitle = styled.h1`
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-bottom: 3px solid black;
`;

const LoginForm = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem auto;
    gap: 1rem;
    * {
        width: 100%;
    }
`;

const LoginCheckbox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    input {
        width: auto;
        cursor: pointer;
        accent-color: black;
        width: 1.1rem;
        height: 1.1rem;
    }
    label {
        width: auto;
        font-size: 0.8rem;
        cursor: pointer;
    }
`;

const LoginButton = styled.div`
    button {
        background-color: black;
        border: 1px solid black;
        color: white;
    }
    padding: 0.3rem 0;
`;

const SNSLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button img {
        width: 1.8rem;
        height: 1.8rem;
    }
    button:nth-child(1) {
        background-color: #03c75a;
        border: 1px solid #03c75a;
        color: white;
    }
    button:nth-child(2) {
        background-color: #fee500;
        border: 1px solid #fee500;
    }
`;

const FindButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6rem 1rem 6rem;
    border-bottom: 3px solid black;
    text-align: center;
    button {
        background-color: transparent;
        border: none;
        font-weight: 500;
        cursor: pointer;
    }
    button span {
        display: inline-block;
        width: 10px;
    }
`;

const SignUpContainer = styled.div`
    font-weight: 600;
    p {
        padding-top: 0.5rem;
        padding-bottom: 2rem;
        text-align: center;
        font-size: 0.9rem;
    }
    button {
        background-color: white;
        border: 1px solid black;
    }
`;

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = () => {
        if (!email.trim()) {
            setEmailError("이메일을 입력하세요.");
            return false;
        }
        return true;
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // 이메일과 비밀번호 유효성 검사
        // if (validateEmail() && validatePassword()) {
        if (validateEmail()) {
            // 유효성 검사를 통과한 경우, 로그인 API 호출 또는 다음 단계로 이동
            // console.log("로그인 성공:", inputLoginId, inputLoginPw);
            console.log("로그인 성공:", email);
            // 여기에서 로그인 API 호출 또는 다음 단계로 이동하는 로직을 추가할 수 있습니다.
        }
    };

    return (
        <LoginContainer>
            <ContainerTitle>로그인</ContainerTitle>
            <LoginForm id="login-form">
                <div>
                    <InputBox
                        type="email"
                        id="login-id"
                        placeholder="이메일"
                        inputValue={email}
                        setInputValue={setEmail}
                        errorMessage={emailError}
                        handleValidate={validateEmail}
                    />
                    <InputBox
                        type="password"
                        id="login-password"
                        placeholder="비밀번호"
                        inputValue={email}
                        setInputValue={setEmail}
                        errorMessage={emailError}
                        handleValidate={validateEmail}
                    />
                </div>

                <LoginCheckbox>
                    <input type="checkbox" id="save-id" />
                    <label htmlFor="save-id">아이디 저장</label>
                </LoginCheckbox>
                <div>
                    <LoginButton>
                        <button onSubmit={handleLoginSubmit}>로그인</button>
                    </LoginButton>
                    <SNSLogin>
                        <button type="button">
                            <img src={naverLogo} alt="naver-logo" />
                            네이버 로그인
                        </button>
                        <button type="button">
                            <img src={kakoLogo} alt="kakao-logo" />
                            카카오 로그인
                        </button>
                    </SNSLogin>
                </div>

                <FindButton>
                    <button type="button">아이디 찾기</button>
                    <span style={{ color: "#ddd" }}>|</span>
                    <button type="button">비밀번호 찾기</button>
                </FindButton>

                <SignUpContainer>
                    <p>
                        지금 바로 회원가입하고{" "}
                        <span style={{ color: "#ff3600", fontWeight: "bold" }}>
                            특별한 혜택
                        </span>{" "}
                        받기
                    </p>
                    <button type="button" onClick={() => navigate("/signup")}>
                        회원가입
                    </button>
                </SignUpContainer>
            </LoginForm>
        </LoginContainer>
    );
}

export default Login;
