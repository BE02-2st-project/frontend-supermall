import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import InputMyPage from "../components/MyPage/InputMyPage";

function MyPage() {
    /*
    useEffect(() => {
        const dispatch = useDispatch();
        dispatch(login({ email: "1717kso@naver.com", password: "" }));
    }, []);

    const emailId = useSelector((state) => state.loginSlice);
    console.log("emailId", emailId.email);
    */

    return (
        <div>
            <PageHeader title="마이페이지"></PageHeader>
            <MyPageMenu order={0}></MyPageMenu>
        </div>
    );
}

export default MyPage;
