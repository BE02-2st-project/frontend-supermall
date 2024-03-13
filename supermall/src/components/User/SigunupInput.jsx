import React, { useState } from "react";
import styled from "styled-components";
import InputBox from "../components/User/InputBox";

function SigunupInput() {
    return (
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
    );
}

export default SigunupInput;
