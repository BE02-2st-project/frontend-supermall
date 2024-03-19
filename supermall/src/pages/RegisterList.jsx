import React from "react";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import styled from "styled-components";

function ResigerList() {
    return (
        <>
            <PageHeader title="마이페이지"></PageHeader>
            <MyPageMenu order={3}></MyPageMenu>;
        </>
    );
}

export default ResigerList;
