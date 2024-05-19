import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import LoginForm from "../components/User/LoginForm";

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

function Login() {
    return (
        <LoginContainer>
            <PageHeader title="로그인"></PageHeader>
            <LoginForm />
        </LoginContainer>
    );
}

export default Login;
