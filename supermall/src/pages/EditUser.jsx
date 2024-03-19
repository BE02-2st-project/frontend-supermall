import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import InputMyPage from "../components/MyPage/InputMyPage";
import DaumPostcode from "react-daum-postcode";

const InputBox = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, auto) minmax(500px, auto);
    gap: 1.5rem;

    input {
        border: 1px solid #ddd;
        height: 2rem;
        padding: 1.2rem 1rem;
        margin-bottom: 0.5rem;
        &:focus {
            outline: 1px solid black;
        }
    }
`;

const MyPageForm = styled.form`
    width: 70%;
    margin: 0 auto;
`;

const InputSetStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

function EditUser() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addressValue, setAddressValue] = useState("");
    const [zipCode, setZipCode] = useState("");

    const onCompletePost = (data) => {
        setIsModalOpen(false);
        setAddressValue(data.address);
        setZipCode(data.zonecode);
    };
    return (
        <div>
            <MyPageMenu order={1}></MyPageMenu>
            <MyPageForm>
                <InputBox>
                    <label htmlFor="user-name">이름</label>
                    <input type="text" placeholder="이름 입력" />
                </InputBox>

                <InputBox>
                    <div>아이디</div>
                    <div>1717kso@naver.com</div>
                </InputBox>

                <InputBox>
                    <label htmlFor="user-password">비밀번호</label>
                    <input
                        type="password"
                        id="edit-password"
                        placeholder="새 비밀번호 (8~12자 영문, 숫자, 특수문자 중 최소 2가지 조합)"
                    />
                </InputBox>

                <InputBox>
                    <label htmlFor="user-password-check">비밀번호 확인</label>
                    <input
                        type="password"
                        id="edit-password-check"
                        placeholder="새 비밀번호 확인"
                    />
                </InputBox>

                <InputBox>
                    <label htmlFor="user-phone">휴대전화</label>
                    <div>
                        <InputSetStyle>
                            <input
                                type="number"
                                min="2"
                                max="3"
                                placeholder="010"
                            />
                            <input type="number" min="3" max="4" />
                            <input type="number" min="3" max="4" />
                            <button type="button">인증하기</button>
                        </InputSetStyle>
                        <p>
                            휴대전화번호를 변경하시려면 인증하기를 눌러
                            변경해주세요
                        </p>
                    </div>
                </InputBox>

                <InputBox>
                    <label htmlFor="user-address">주소</label>
                    <div>
                        <div>
                            <input type="text" value={zipCode} />
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                            >
                                우편번호 찾기
                            </button>
                        </div>
                        <input type="text" value={addressValue} />
                        <input type="text" />
                    </div>
                </InputBox>

                {isModalOpen && (
                    <div>
                        <DaumPostcode
                            onComplete={onCompletePost}
                        ></DaumPostcode>
                    </div>
                )}

                <InputBox>
                    <div>e-Mail, SMS(알림톡)</div>
                    <div>
                        <input
                            type="checkbox"
                            id="receive-email-inform"
                            name="receive-email"
                        />
                        <label htmlFor="receive-email-inform">
                            e-Mail 수신
                        </label>
                        <input
                            type="checkbox"
                            id="receive-sns-inform"
                            name="receive-sns"
                        />
                        <label htmlFor="receive-sns-inform">
                            SNS(알림톡) 수신
                        </label>
                    </div>
                </InputBox>

                <ul>
                    <li>
                        상기 부가정보 수신 동의는 F&F 브랜드에서 회원에게
                        이메일, SMS를 활용하여 상품 및 서비스에 대한 제반 마케팅
                        활동을 하기 위한 회원정보 (개인정보취급 방침 중 “2.
                        수집하는 개인정보 항목” 기재 항목)제공 및 각 서비스
                        수신에 대한 사항입니다.
                    </li>
                    <li>
                        약관변경이나 공지 등의 고지성 안내 메일은 수신동의
                        하지않더라도 고객의 권익보호를 위해 발송됩니다.
                    </li>
                    <li>
                        제공된 회원정보는 F&F 브랜드가 별도 동의를 득한 경우를
                        제외하고는 회원탈퇴 후 30일까지 보유합니다.
                    </li>
                </ul>
            </MyPageForm>
        </div>
    );
}

export default EditUser;
