import React, { useState } from "react";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import Toggle from "../common/Toggle";
import { useNavigate } from "react-router-dom";

const UserPreview = styled.div`
    width: 90%;
    max-width: 1200px;
    height: 11rem;
    margin: 2rem auto 1rem auto;
    padding: 0.5rem 2rem;

    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    gap: 1.5rem;
`;

const UserName = styled.div`
    div {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    span {
        background-color: white;
        color: black;
        border-radius: 10px;
        padding: 0.2rem 0.5rem;
    }
`;

const UserCash = styled.div`
    display: flex;
    gap: 1rem;
`;

const UserHold = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    width: 200px;
    height: 90%;
    background-color: #222;
    padding: 1.5rem;
    border-radius: 10px;
    div:nth-child(2) {
        font-size: 3rem;
        font-weight: bold;
        text-align: right;
    }
`;

const MyPageTitle = styled.h1`
    width: 90%;
    max-width: 1200px;
    padding: 1rem 0;
    border-bottom: 1px solid black;
    margin: 0 auto;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
`;

const OrderList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
    height: 10rem;
`;

const UserSNSLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 0;
        color: #666;
    }
`;

const ToggleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ddd;
    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.8rem;
        color: #666;
        margin-left: 1rem;
    }
`;

function MyPage() {
    const userEmail = localStorage.getItem("email");
    const [onNaver, setOnNaver] = useState(false);
    const [onKakao, setOnKakao] = useState(false);

    const navigate = useNavigate();
    return (
        <div>
            <PageHeader
                title="마이페이지"
                short={true}
                handleHeaderClick={() => navigate("/mypage")}
            ></PageHeader>
            <MyPageMenu order={0}></MyPageMenu>
            <UserPreview>
                <UserName>
                    <div>{userEmail.split("@")[0]} 님</div>
                    <span>FRIENDS</span>
                </UserName>
                <UserCash>
                    <UserHold>
                        <div>마일리지</div>
                        <div>10,000</div>
                    </UserHold>
                    <UserHold>
                        <div>포인트</div>
                        <div>0</div>
                    </UserHold>
                    <UserHold>
                        <div>쿠폰</div>
                        <div>0</div>
                    </UserHold>
                </UserCash>
            </UserPreview>

            <div>
                <MyPageTitle>주문내역</MyPageTitle>
                <OrderList>주문내역이 없습니다.</OrderList>
            </div>
            <UserSNSLogin>
                <MyPageTitle>간편로그인 계정관리</MyPageTitle>
                <p>
                    자주 사용하시는 소셜 계정으로 간편하게 로그인하실 수
                    있습니다.
                </p>

                <ToggleBox>
                    <div>
                        <img
                            src="http://static-resource.mlb-korea.com/pc/static/images/my/btnNpay.png"
                            alt="Naver"
                        />
                        <span>네이버 계정</span>
                        <Toggle isActive={onNaver} setIsActive={setOnNaver} />
                    </div>
                    <div>
                        <img
                            src="http://static-resource.mlb-korea.com/pc/static/images/cm/bg_kakao.png"
                            alt="Kakao"
                        />
                        <span>카카오 계정</span>
                        <Toggle isActive={onKakao} setIsActive={setOnKakao} />
                    </div>
                </ToggleBox>
            </UserSNSLogin>
        </div>
    );
}

export default MyPage;
