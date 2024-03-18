import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import naverLogo from "../assets/naver_logo.png";
import kakoLogo from "../assets/kakao_logo.png";
import InputLogin from "../components/User/InputLogin";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";

const LoginContainer = styled.div`
    margin: 0 2rem;
    button {
        border-radius: 5px;
        font-weight: 500;
        width: 100%;
        height: 3rem;
        cursor: pointer;
    }
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
        background-color: ${(props) => (props.$isDisabled ? "#ddd" : "black")};
        /* background-color: black; */
        border: 1px solid ${(props) => (props.$isDisabled ? "#ddd" : "black")};
        color: white;
        cursor: ${(props) => (props.$isDisabled ? "default" : "pointer")};
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

const initState = {
    email: "",
    password: "",
};

function Login() {
    const navigate = useNavigate();
    const [loginParam, setLoginParam] = useState({ ...initState });

    /* 
const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  fetch("API 주소", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      throw new Error("에러 발생!");
    })
    .catch((error) => {
      alert(error);
    })
    .then((data) => {
      console.log(data);
    });
    */

    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        // 하나라도 유효하지 않으면 disabled="true"
        if (isValidEmail && isValidPassword) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [isValidEmail, isValidPassword]);

    const handleSubmitLogin = (event) => {
        event.preventDefault();
    };
    return (
        <LoginContainer>
            <PageHeader title="로그인"></PageHeader>
            <LoginForm id="login-form">
                <div>
                    <InputLogin
                        type="text"
                        id="login-id"
                        name="email"
                        placeholder="이메일"
                        errorMessage="이메일 형식으로 입력해주세요"
                        loginParam={loginParam}
                        setLoginParam={setLoginParam}
                        isValid={isValidEmail}
                        setIsValid={setIsValidEmail}
                    />

                    <InputLogin
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="비밀번호"
                        errorMessage="비밀번호를 입력해주세요"
                        loginParam={loginParam}
                        setLoginParam={setLoginParam}
                        isValid={isValidPassword}
                        setIsValid={setIsValidPassword}
                    />
                </div>

                <LoginCheckbox>
                    <input type="checkbox" id="save-id" />
                    <label htmlFor="save-id">아이디 저장</label>
                </LoginCheckbox>

                <div>
                    <LoginButton $isDisabled={isDisabled}>
                        {/* <button onSubmit={handleLoginSubmit}>로그인</button> */}
                        <button
                            onSubmit={handleSubmitLogin}
                            disabled={isDisabled}
                        >
                            로그인
                        </button>
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
