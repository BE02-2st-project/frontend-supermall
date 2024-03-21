import React, { useState } from "react";
import styled from "styled-components";

const InputBox = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, auto) minmax(500px, auto);
    gap: 1.5rem;
`;

const InputStyle = styled.input`
    display: block;
    border: 1px solid #ddd;
    height: 2rem;
    padding: 1.2rem 1rem;
    margin-bottom: 0.5rem;
    &:focus {
        outline: 1px solid black;
    }
`;

const ErrorStyle = styled.p`
    font-size: 0.9rem;
    color: #ff3600;
`;

const InformStyle = styled.p`
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) => (props.ErrorOccured ? "#ff3600" : "#999")};
`;

export default function InputSignup({
    label,
    type,
    id,
    name,
    placeholder,
    errorMessage,
    signupParam,
    setSignupParam,
    isValid,
    setIsValid,
    informMessage,
}) {
    // 이메일 형식
    let emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
    );
    let passwordRegex = new RegExp(
        /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,12}$/
    );

    const [inputValue, setInputValue] = useState("");
    const [showError, setShowError] = useState(false);

    const handleChange = (event) => {
        signupParam[event.target.name] = event.target.value.trim();
        setSignupParam({ ...signupParam });
        setInputValue(event.target.value.trim());

        switch (name) {
            case "email":
                if (
                    signupParam["email"] &&
                    emailRegex.test(signupParam["email"])
                ) {
                    setIsValid(true);
                    setShowError(false);
                } else {
                    setIsValid(false);
                    setShowError(true);
                }
                break;

            case "password":
                if (
                    signupParam["password"] &&
                    passwordRegex.test(signupParam["password"])
                ) {
                    // 빈값이면 유효하지 않음
                    setIsValid(true);
                    setShowError(false);
                } else {
                    setIsValid(false);
                    setShowError(true);
                }
                break;

            case "passwordCheck":
                if (
                    signupParam["passwordCheck"] &&
                    signupParam["passwordCheck"] === signupParam["password"]
                ) {
                    setIsValid(true);
                    setShowError(false);
                } else {
                    setIsValid(false);
                    setShowError(true);
                }
                break;
        }
    };

    const handleValidate = () => {
        switch (name) {
            case "email":
                if (
                    signupParam["email"] &&
                    emailRegex.test(signupParam["email"])
                ) {
                    setIsValid(true);
                    setShowError(false);
                } else {
                    setIsValid(false);
                    setShowError(true);
                }
                break;

            case "password":
                if (
                    signupParam["password"] &&
                    passwordRegex.test(signupParam["password"])
                ) {
                    // 빈값이면 유효하지 않음
                    setIsValid(true);
                    setShowError(false);
                } else {
                    setIsValid(false);
                    setShowError(true);
                }
                break;

            case "passwordCheck":
                if (
                    signupParam["passwordCheck"] &&
                    signupParam["passwordCheck"] === signupParam["password"]
                ) {
                    setIsValid(true);
                    setShowError(false);
                } else {
                    setIsValid(false);
                    setShowError(true);
                }
                break;
        }
    };

    return (
        <InputBox $informMessage={informMessage} $showError={showError}>
            <label htmlFor={id}>{label}</label>
            <div>
                <InputStyle
                    value={inputValue}
                    onChange={handleChange}
                    name={name}
                    onBlur={handleValidate}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                />
                {showError ? (
                    <ErrorStyle>{errorMessage}</ErrorStyle>
                ) : isValid ? (
                    <InformStyle></InformStyle>
                ) : (
                    <InformStyle>{informMessage}</InformStyle>
                )}
            </div>
        </InputBox>
    );
}
