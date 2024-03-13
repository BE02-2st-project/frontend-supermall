import React, { useState } from "react";
import styled from "styled-components";

const LoginInputStyle = styled.input`
    display: block;
    border: 1px solid #ddd;
    height: 2rem;
    padding: 1.2rem 1rem;
    margin-bottom: 0.5rem;
    &:focus {
        outline: 1px solid black;
    }
`;

const LoginErrorStyle = styled.p`
    font-size: 0.9rem;
    color: #ff3600;
`;

export default function LoginButton({
    type,
    id,
    placeholder,
    inputValue,
    setInputValue,
    errorMessage,
    handleValidate,
}) {
    return (
        <>
            <LoginInputStyle
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleValidate}
                type={type}
                id={id}
                placeholder={placeholder}
            />
            {errorMessage && <LoginErrorStyle>{errorMessage}</LoginErrorStyle>}
        </>
    );
}
