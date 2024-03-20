import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";

const UserPreview = styled.div`
    background-color: black;
    color: white;
    width: 90%;
    height: 12rem;
    margin: 0 auto;

    display: flex;
`;

const UserHold = styled.div`
    height: 90%;
    background-color: #222;
`;

function MyPage() {
    /*
    useEffect(() => {
        const dispatch = useDispatch();
        dispatch(login({ email: "1717kso@naver.com", password: "" }));
    }, []);

    const emailId = useSelector((state) => state.loginSlice);
    console.log("emailId", emailId.email);
    */

    const userEmail = localStorage.getItem("email");

    return (
        <div>
            <PageHeader title="마이페이지"></PageHeader>
            <MyPageMenu order={0}></MyPageMenu>
            <UserPreview>
                <div>{userEmail} 님</div>
                <UserHold>
                    <div>마일리지</div>
                    <div>10,000</div>
                </UserHold>
            </UserPreview>
        </div>
    );
}

export default MyPage;
