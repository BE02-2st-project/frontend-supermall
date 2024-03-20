import React from "react";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Resiger() {
    const navigate = useNavigate();
    return (
        <>
            <PageHeader
                title="마이페이지"
                handleHeaderClick={() => navigate("/mypage")}
            ></PageHeader>
            <MyPageMenu order={2}></MyPageMenu>;
        </>
    );
}

export default Resiger;
