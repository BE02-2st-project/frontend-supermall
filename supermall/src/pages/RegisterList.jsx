import React from "react";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ResigerList() {
    const navigate = useNavigate();
    return (
        <>
            <PageHeader
                short={true}
                title="판매상품목록"
                handleHeaderClick={() => navigate("/mypage")}
            ></PageHeader>
            <MyPageMenu order={5}></MyPageMenu>;
        </>
    );
}

export default ResigerList;
