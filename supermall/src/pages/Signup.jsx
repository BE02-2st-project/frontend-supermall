import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import InputSignup from "../components/User/InputSignup";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import naver_logo from "../assets/naver_logo_circle.png";
import kakao_logo from "../assets/kakao_logo_circle.png";
import TOS from "../components/User/TOS";
import { useNavigate } from "react-router-dom";

const SignUpContainer = styled.div`
    max-width: 700px;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    button {
        border-radius: 5px;
        font-weight: 500;
        width: 100%;
        height: 3rem;
        cursor: pointer;
    }
`;

const SignupRequireBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-bottom: 2rem;

    h3 {
        /* 크기 */
        width: 100%;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #666;
        font-weight: 500;
    }
`;

const SignupForm = styled.form`
    width: 100%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    * {
        width: 100%;
    }
    label {
        padding-top: 0.5rem;
        &:after {
            content: "*";
            color: #ff3600;
            padding-left: 0.2rem;
        }
    }
`;

const SignupAgreeBox = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #666;
    padding-bottom: 0.5rem;
    button {
        width: 2rem;
        height: 2rem;
        font-size: 1.2rem;
        color: #666;
        border: none;
        background: none;
    }
`;

const SignupAgreeDropdown = styled.div`
    font-size: 1rem;
    font-weight: 500;
    input {
        margin-right: 0.5rem;
        width: 1rem;
        height: 1rem;
        vertical-align: middle;
        accent-color: black;
        cursor: pointer;
        border-radius: 50%;
    }
    label {
        cursor: pointer;
    }
`;

const SignupSubmitBtn = styled.div`
    button {
        background-color: ${(props) => (props.$isDisabled ? "#ddd" : "black")};
        border: 1px solid ${(props) => (props.$isDisabled ? "#ddd" : "black")};
        cursor: ${(props) => (props.$isDisabled ? "default" : "pointer")};
        color: white;
        font-size: 1.1rem;
    }
    margin: 3rem 0;
`;

const SignupSNSContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid black;
    padding-top: 2.5rem;
`;

const SignupSNSTitle = styled.div`
    h3 {
        padding: 0.5rem 0;
        font-weight: 500;
        font-size: 1.5rem;
    }
    p {
        font-size: 0.8rem;
        color: #666;
        padding: 1rem 0;
    }
`;

const SignupSNSLogo = styled.div`
    display: flex;
    text-align: center;
    gap: 1rem;
    font-size: 0.8rem;
    color: #666;
    cursor: pointer;
    p {
        padding-top: 0.5rem;
    }
`;

function Signup() {
    const navigate = useNavigate();

    // 회원가입 작성란
    const [signupParam, setSignupParam] = useState({
        email: "",
        password: "",
        passwordCheck: "",
    });

    // 작성란 유효여부
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isSamePassword, setIsSamePassword] = useState(false);
    const [allValid, setAllValid] = useState(false);

    // 이용약관 및 개인정보 수집 동의 파트
    const [isAgreeOpen, setIsAgreeOpen] = useState(false);
    const [fullAgree, setFullAgree] = useState(false);
    const [requireCheck, setRequireCheck] = useState(false);

    // 회원가입 버튼 활성화
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setAllValid(isValidEmail && isValidPassword && isSamePassword);
    }, [isValidEmail, isValidPassword, isSamePassword]);

    useEffect(() => {
        // 하나라도 유효하지 않으면 disabled="true"
        if (allValid && (requireCheck || fullAgree)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [allValid, requireCheck, fullAgree]);

    const handleSubmitSignup = (event) => {
        event.preventDefault();

        fetch("http://43.202.211.22:8080/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: signupParam.email,
                password: signupParam.password,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("회원가입이 성공하였습니다.");
                    navigate("/login");
                } else {
                    // 회원가입이 실패한 경우
                    console.error("회원가입에 실패하였습니다.");
                }
            })
            .catch((error) => {
                console.error("회원가입 중 오류가 발생하였습니다:");
            });
    };

    return (
        <>
            <PageHeader title="회원가입"></PageHeader>
            <SignUpContainer>
                <SignupRequireBox>
                    <h3>필수정보</h3>
                    <SignupForm id="signup-form" onSubmit={handleSubmitSignup}>
                        <InputSignup
                            label="이메일"
                            type="text"
                            id="signup-email"
                            name="email"
                            placeholder="이메일 입력"
                            errorMessage="이메일 형식을 입력하세요"
                            signupParam={signupParam}
                            setSignupParam={setSignupParam}
                            isValid={isValidEmail}
                            setIsValid={setIsValidEmail}
                        />

                        <InputSignup
                            label="비밀번호"
                            type="password"
                            id="signup-password"
                            name="password"
                            placeholder="비밀번호 입력"
                            errorMessage="8~12자 영문, 숫자, 특수문자 중 최소 2가지 조합으로 입력해주세요"
                            signupParam={signupParam}
                            setSignupParam={setSignupParam}
                            isValid={isValidPassword}
                            setIsValid={setIsValidPassword}
                            informMessage="8~12자 영문, 숫자, 특수문자 중 최소 2가지 조합"
                        />
                        <InputSignup
                            label="비밀번호 확인"
                            type="password"
                            id="signup-password-check"
                            name="passwordCheck"
                            placeholder="비밀번호 확인"
                            errorMessage="비밀번호를 똑같이 입력해주세요"
                            signupParam={signupParam}
                            setSignupParam={setSignupParam}
                            isValid={isSamePassword}
                            setIsValid={setIsSamePassword}
                        />
                    </SignupForm>
                </SignupRequireBox>

                <SignupAgreeBox>
                    <SignupAgreeDropdown>
                        <input
                            type="checkbox"
                            id="signup-agree"
                            name="signup-agree"
                            checked={fullAgree}
                            onChange={() => setFullAgree(!fullAgree)}
                        />
                        <label htmlFor="signup-agree">
                            이용약관 및 개인정보 수집 전체 동의
                        </label>
                    </SignupAgreeDropdown>

                    {isAgreeOpen ? (
                        <button
                            type="button"
                            onClick={() => setIsAgreeOpen(!isAgreeOpen)}
                        >
                            <IoIosArrowUp />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setIsAgreeOpen(!isAgreeOpen)}
                        >
                            <IoIosArrowDown />
                        </button>
                    )}
                </SignupAgreeBox>
                {isAgreeOpen && (
                    <TOS
                        fullAgree={fullAgree}
                        setFullAgree={setFullAgree}
                        requireCheck={requireCheck}
                        setRequireCheck={setRequireCheck}
                    />
                )}

                <SignupSubmitBtn $isDisabled={isDisabled}>
                    <button disabled={isDisabled} form="signup-form">
                        회원가입
                    </button>
                </SignupSubmitBtn>

                <SignupSNSContainer>
                    <SignupSNSTitle>
                        <h3>간편회원 가입</h3>
                        <p>자주 사용하는 SNS 아이디로 간편하게 가입</p>
                    </SignupSNSTitle>
                    <SignupSNSLogo>
                        <div>
                            <img src={naver_logo} alt="Naver Logo" />
                            <p>네이버로 가입</p>
                        </div>
                        <div>
                            <img src={kakao_logo} alt="Kakao Logo" />
                            <p>카카오로 가입</p>
                        </div>
                    </SignupSNSLogo>
                </SignupSNSContainer>
            </SignUpContainer>
        </>
    );
}

export default Signup;
