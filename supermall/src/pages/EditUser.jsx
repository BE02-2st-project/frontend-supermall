import React, { useState } from "react";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import AddressModal from "../components/User/AddressModal";
import ConfirmModal from "../common/ConfirmModal";
import { useNavigate } from "react-router-dom";

const MyPageForm = styled.form`
    max-width: 850px;
    padding: 0 0.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const InputBox = styled.div`
    display: grid;
    grid-template-columns: 150px minmax(300px, auto);
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 1rem;

    input:not([type="checkbox"]) {
        width: 100%;
        border: 1px solid #ddd;
        height: 2.5rem;
        padding: 1.2rem 1rem;
        &:focus {
            outline: 1px solid black;
        }
    }
    span {
        color: #ddd;
    }
    p {
        font-size: 0.8rem;
        color: #666;
        margin-top: 0.5rem;
    }
`;

const FixedInput = styled.div`
    padding: 0.5rem 0;
`;

const PasswordInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`;

const PhoneNumberStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    div {
        width: 50%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    input {
        text-align: center;
    }
`;

const MyPageInputButton = styled.button`
    width: 150px;
    height: 2.5rem;
    background-color: white;
    border: 1px solid black;
    /* padding: 0.7rem 1.2rem; */
    cursor: pointer;
`;

const AddressInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    > div {
        display: grid;
        grid-template-columns: 1.05fr 1fr;
        align-items: center;
        gap: 1rem;
        input {
        }
    }

    input {
        background-color: rgb(248, 248, 248);
    }

    input:nth-child(3) {
        background-color: white;
    }
`;

const ReceiveCheckbox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 0.5rem;
    input {
        width: 1.1rem;
        height: 1.1rem;
        accent-color: black;
    }
`;

const AdditionalInform = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 0.8rem;
    color: #666;
    li::marker {
        content: "- ";
    }
`;

const ControlButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
    button {
        width: 12rem;
        height: 3rem;
        background-color: white;
        border: 1px solid black;
        cursor: pointer;
    }

    button:nth-child(2) {
        background-color: black;
        border: 1px solid black;
        color: white;
    }
`;

function EditUser() {
    const userEmail = localStorage.getItem("email");
    const navigate = useNavigate();

    // form 값
    const [editName, setEditName] = useState("");
    const [editPassword, setEditPassword] = useState("");
    const [editPasswordCheck, setEditPasswordCheck] = useState();

    // 휴대전화
    const [editNumber, setEditNumber] = useState({
        partOne: "010",
        partTwo: "",
        partThree: "",
    });

    const handleChangeNumber = (event) => {
        setEditNumber((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            };
        });
    };

    // 주소
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addressValue, setAddressValue] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [addressDetail, setAddressDetail] = useState("");

    const onCompletePost = (data) => {
        setIsModalOpen(false);
        setAddressValue(data.address);
        setZipCode(data.zonecode);
    };

    // 취소 VS 확인 버튼
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [buttonType, setButtonType] = useState("");
    const handleCancel = () => {
        navigate("/mypage");
    };
    const handleEditSubmit = (event) => {
        event.preventDefault();
        setConfirmOpen(false);
        navigate("/mypage");

        // const formData = {
        //     userName: editName,
        //     email: userEmail,
        //     password: editPassword,
        //     phoneNumber:
        //         editNumber.partOne + editNumber.partTwo + editNumber.partThree,
        // };

        // fetch("")
    };

    console.log(confirmOpen);

    return (
        <div>
            <PageHeader
                title="마이페이지"
                handleHeaderClick={() => navigate("/mypage")}
            ></PageHeader>
            <MyPageMenu order={1}></MyPageMenu>
            <MyPageForm id="edit-form" onSubmit={handleEditSubmit}>
                <InputBox>
                    <div>아이디</div>
                    <FixedInput>{userEmail}</FixedInput>
                </InputBox>

                <InputBox>
                    <label htmlFor="user-name">이름</label>
                    <input
                        type="text"
                        id="user-name"
                        placeholder="이름 입력"
                        value={editName}
                        onChange={(event) => setEditName(event.target.value)}
                    />
                </InputBox>

                <InputBox>
                    <label htmlFor="user-password">비밀번호</label>
                    <PasswordInput>
                        <input
                            type="password"
                            id="user-password"
                            placeholder="새 비밀번호 (8~12자 영문, 숫자, 특수문자 중 최소 2가지 조합)"
                            value={editPassword}
                            onChange={(event) =>
                                setEditPassword(event.target.value)
                            }
                        />
                        <input
                            type="password"
                            id="user-password-check"
                            placeholder="새 비밀번호 확인"
                            value={editPasswordCheck}
                            onChange={(event) =>
                                setEditPasswordCheck(event.target.value)
                            }
                        />
                    </PasswordInput>
                </InputBox>

                <InputBox>
                    <label htmlFor="user-phone">휴대전화</label>
                    <div>
                        <PhoneNumberStyle>
                            <div>
                                <input
                                    type="tel"
                                    min="2"
                                    max="3"
                                    name="partOne"
                                    value={editNumber.partOne}
                                    onChange={handleChangeNumber}
                                />
                                <span>-</span>
                                <input
                                    type="tel"
                                    min="3"
                                    max="4"
                                    id="user-phone"
                                    name="partTwo"
                                    value={editNumber.partTwo}
                                    onChange={handleChangeNumber}
                                />
                                <span>-</span>
                                <input
                                    type="tel"
                                    min="3"
                                    max="4"
                                    name="partThree"
                                    value={editNumber.partThree}
                                    onChange={handleChangeNumber}
                                />
                            </div>
                            <MyPageInputButton type="button">
                                인증하기
                            </MyPageInputButton>
                        </PhoneNumberStyle>
                        <p>
                            휴대전화번호를 변경하시려면 인증하기를 눌러
                            변경해주세요
                        </p>
                    </div>
                </InputBox>

                <InputBox>
                    <label htmlFor="user-address">주소</label>
                    <AddressInput>
                        <div>
                            <div>
                                <input type="text" value={zipCode} disabled />
                            </div>
                            <MyPageInputButton
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                            >
                                우편번호 찾기
                            </MyPageInputButton>
                        </div>
                        <input type="text" value={addressValue} disabled />
                        <input
                            type="text"
                            id="user-address"
                            value={addressDetail}
                            onChange={(event) =>
                                setAddressDetail(event.target.value)
                            }
                        />
                    </AddressInput>
                </InputBox>

                {isModalOpen && (
                    <AddressModal
                        onCompletePost={onCompletePost}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}

                <InputBox>
                    <div>e-Mail, SMS(알림톡)</div>
                    <div>
                        <ReceiveCheckbox>
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
                        </ReceiveCheckbox>
                        <AdditionalInform>
                            <li>
                                e-Mail, SMS(알림톡)을 통한 상품 및 이벤트 정보
                                수신에 동의합니다.
                            </li>
                            <li>
                                거래정보(주문/반품/교환) 관련
                                e-Mail/SMS(알림톡)은 수신동의 하지 않아도
                                발송됩니다.
                            </li>
                        </AdditionalInform>
                    </div>
                </InputBox>

                <AdditionalInform>
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
                </AdditionalInform>

                <ControlButtonBox>
                    <button
                        type="button"
                        onClick={() => {
                            setConfirmOpen(true);
                            setButtonType("cancel");
                        }}
                    >
                        취소
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setConfirmOpen(true);
                            setButtonType("accept");
                        }}
                    >
                        확인
                    </button>
                </ControlButtonBox>

                {confirmOpen && (
                    <ConfirmModal
                        setIsOpen={setConfirmOpen}
                        confirmText={
                            buttonType === "cancel"
                                ? "취소하시겠습니까?"
                                : "수정 내용을 저장하시겠습니까?"
                        }
                        onClickConfirm={
                            buttonType === "cancel"
                                ? handleCancel
                                : handleEditSubmit
                        }
                    />
                )}
            </MyPageForm>
        </div>
    );
}

export default EditUser;
