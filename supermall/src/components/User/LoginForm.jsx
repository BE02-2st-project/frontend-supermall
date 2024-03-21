import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import naverLogo from "../../assets/naver_logo.png";
import kakoLogo from "../../assets/kakao_logo.png";
import InputLogin from "../../components/User/InputLogin";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../common/PageHeader";

const LoginFormStyle = styled.form`
    max-width: 500px;
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

const LoginReject = styled.div`
    color: rgb(255, 54, 0);
    font-size: 0.9rem;
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

function LoginForm() {
    const regex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
    );
    const navigate = useNavigate();

    const [loginParam, setLoginParam] = useState({
        email: "",
        password: "",
    });

    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [showLoginError, setShowLoginError] = useState(false);
    const [saveId, setSaveId] = useState(false);

    useEffect(() => {
        const savedEmailId = localStorage.getItem("savedEmailId");
        if (savedEmailId) {
            setLoginParam({ email: savedEmailId, password: "" });
            setIsValidEmail(regex.test(savedEmailId));
        }
    }, []);

    useEffect(() => {
        // 하나라도 유효하지 않으면 disabled="true"
        if (isValidEmail && isValidPassword) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [isValidEmail, isValidPassword]);

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        fetch("http://43.202.211.22:8080/api/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginParam),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("로그인 실패");
                }
            })
            .then((data) => {
                // Bearer 토큰 추출 및 localStorage에 토큰 저장
                const accessToken = data.accessToken.split(" ")[1];
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("email", loginParam.email);
                console.log("로그인 성공");
                if (saveId) {
                    // 아이디 저장
                    localStorage.setItem("savedEmailId", loginParam.email);
                }
                navigate("/");
            })
            .catch((error) => {
                setShowLoginError(true);
            });
    };
    return (
        <LoginFormStyle id="login-form" onSubmit={handleSubmitLogin}>
            <div>
                <InputLogin
                    type="text"
                    id="login-id"
                    name="email"
                    placeholder="이메일"
                    errorMessage="이메일 형식으로 입력해주세요"
                    loginParam={loginParam}
                    setLoginParam={setLoginParam}
                    setIsValid={setIsValidEmail}
                    inputValue={loginParam.email}
                />

                <InputLogin
                    type="password"
                    id="login-password"
                    name="password"
                    placeholder="비밀번호"
                    errorMessage="비밀번호를 입력해주세요"
                    loginParam={loginParam}
                    setLoginParam={setLoginParam}
                    setIsValid={setIsValidPassword}
                    inputValue={loginParam.password}
                />
            </div>

            <LoginCheckbox>
                <input
                    type="checkbox"
                    id="save-id"
                    onChange={() => setSaveId(!saveId)}
                />
                <label htmlFor="save-id">아이디 저장</label>
            </LoginCheckbox>

            {showLoginError && (
                <LoginReject>
                    아이디/비밀번호를 정확히 입력했는지 확인해주세요.
                </LoginReject>
            )}

            <div>
                <LoginButton $isDisabled={isDisabled}>
                    {/* <button onSubmit={handleLoginSubmit}>로그인</button> */}
                    <button disabled={isDisabled}>로그인</button>
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
        </LoginFormStyle>
    );
}

export default LoginForm;
