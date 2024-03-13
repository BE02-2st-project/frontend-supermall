import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "../components/User/InputBox";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const SignUpContainer = styled.div`
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

const OpenAgreeBox = styled(IoIosArrowUp)``;
const CloseAgreeBox = styled(IoIosArrowDown)``;

const SignupForm = styled.form`
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

const SignupRequireBox = styled.div``;

const SignupAgreeBox = styled.div``;

function Signup() {
    const [isAgreeOpen, setIsAgreeOpen] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = () => {
        if (!email.trim()) {
            setEmailError("이메일을 입력하세요.");
            return false;
        }
        return true;
    };

    const handleSignupSubmit = (event) => {
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
        <SignUpContainer>
            <ContainerTitle>회원가입</ContainerTitle>
            <SignupForm id="signup-form">
                <SignupRequireBox>
                    <h3>필수정보</h3>
                    <div>
                        <label htmlFor="signup-id">이메일</label>
                        <InputBox
                            type="email"
                            id="signup-id"
                            placeholder="이메일"
                            inputValue={email}
                            setInputValue={setEmail}
                            errorMessage={emailError}
                            handleValidate={validateEmail}
                        />
                    </div>
                    <div>
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
                </SignupRequireBox>

                <SignupAgreeBox>
                    <input type="checkbox" id="signup-agree" />
                    <label htmlFor="signup-agree">
                        이용약관 및 개인정보 수집 전체 동의
                    </label>

                    {isAgreeOpen ? (
                        <button
                            type="button"
                            onClick={() => setIsAgreeOpen(!isAgreeOpen)}
                        >
                            <OpenAgreeBox />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setIsAgreeOpen(!isAgreeOpen)}
                        >
                            <CloseAgreeBox />
                        </button>
                    )}
                </SignupAgreeBox>

                <button onSubmit={handleSignupSubmit}>
                    본인인증하고 회원가입
                </button>
            </SignupForm>
        </SignUpContainer>
    );
}

export default Signup;
