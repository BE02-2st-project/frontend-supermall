import React from "react";
import styled from "styled-components";

const MyPageMenuStyle = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 2rem auto 1rem auto;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    background-color: black;
    a {
        text-decoration: none;
        color: #666;
        font-size: 1.2rem;
    }

    a:nth-of-type(${(props) => props.$order}) {
        color: white;
    }

    span {
        color: #ddd;
    }
`;

function MyPageMenu({ order }) {
    return (
        <MyPageMenuStyle $order={order}>
            <a href="/cart">장바구니</a>
            <span>|</span>
            <a href="/order">주문/결제</a>
            <span>|</span>
            <a href="/mypage/edit">회원정보수정</a>
            <span>|</span>
            <a href="/mypage/register">판매상품등록</a>
            <span>|</span>
            <a href="/mypage/registerlist">판매상품목록</a>
        </MyPageMenuStyle>
    );
}

export default MyPageMenu;
