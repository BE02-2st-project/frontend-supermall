import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

export default function InputBox({
    type,
    id,
    name,
    placeholder,
    errorMessage,
    loginParam,
    setLoginParam,
    setIsValid,
    inputValue,
}) {
    // 이메일 형식
    let regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const savedEmailId = localStorage.getItem("savedEmailId");
        console.log("saveId", savedEmailId);
        if (savedEmailId) {
        }
    }, []);

    const handleChange = (event) => {
        loginParam[event.target.name] = event.target.value.trim();
        setLoginParam({ ...loginParam });

        if (name === "email") {
            if (inputValue && regex.test(inputValue)) {
                setIsValid(true);
                setShowError(false);
            }
        } else {
            if (inputValue) {
                // 빈값이 아니면 유효하게
                setIsValid(true);
                setShowError(false);
            }
        }
    };

    const handleValidate = () => {
        if (name === "email") {
            if (inputValue && regex.test(inputValue)) {
                setIsValid(true);
                setShowError(false);
            } else {
                setIsValid(false);
                setShowError(true);
            }
        } else {
            if (!inputValue) {
                // 빈값이면 유효하지 않음
                setIsValid(false);
                setShowError(true);
            } else {
                setIsValid(true);
                setShowError(false);
            }
        }
    };

    return (
        <>
            <InputStyle
                value={inputValue}
                onChange={handleChange}
                name={name}
                onBlur={handleValidate}
                type={type}
                id={id}
                placeholder={placeholder}
            />
            {showError && <ErrorStyle>{errorMessage}</ErrorStyle>}
        </>
    );
}
