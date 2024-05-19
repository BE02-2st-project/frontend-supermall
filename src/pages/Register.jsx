import React, { useRef, useState } from "react";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsImages } from "react-icons/bs";

const RegisterItemForm = styled.form`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
`;

const RegisterImages = styled.div`
    position: relative;
    input {
        display: none;
    }

    button {
        width: 40vw;
        height: 40vh;
        background-color: white;
        font-size: 4rem;
        cursor: pointer;
    }
`;

const RegisterDetail = styled.div``;

const InputSet = styled.div`
    display: flex;
    align-items: center;
    label {
        width: 200px;
    }
`;

const PreviewImgBox = styled.div`
    width: 100%;
    display: flex;
    overflow: scroll;
    gap: 1rem;

    li {
        list-style: none;
    }
    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`;

function Resiger() {
    const navigate = useNavigate();

    const uploadRef = useRef();
    const handleUploadImg = () => {
        uploadRef.current.click();
    };

    const [uploadImgs, setUploadImgs] = useState([]);

    const handleChangeImgs = (event) => {
        const fileArray = Array.from(event.target.files);
        fileArray.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                const dataURL = reader.result;
                setUploadImgs((prevFiles) => [...prevFiles, dataURL]);
            };
            reader.readAsDataURL(file);
        });
    };
    const handleSubmitRegister = (event) => {
        event.preventDefault();
    };
    console.log("up", uploadImgs);

    return (
        <>
            <PageHeader
                title="판매상품등록"
                short={true}
                handleHeaderClick={() => navigate("/mypage")}
            ></PageHeader>
            <MyPageMenu order={4}></MyPageMenu>

            <RegisterItemForm onSubmit={handleSubmitRegister}>
                <RegisterImages>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        ref={uploadRef}
                        onChange={handleChangeImgs}
                    />
                    <button type="button" onClick={handleUploadImg}>
                        <BsImages />
                    </button>

                    <PreviewImgBox>
                        {uploadImgs.map((dataURL, index) => (
                            <li key={index}>
                                <img src={dataURL} alt={`Preview ${index}`} />
                            </li>
                        ))}
                    </PreviewImgBox>
                </RegisterImages>

                {/*
                <RegisterDetail>
                    <InputSet>
                        <label htmlFor="register-category">카테고리</label>
                        <select name="register-category" id="register-category">
                            <option value="apparel">apparel</option>
                            <option value="cap">cap</option>
                            <option value="shoes">shoes</option>
                            <option value="bag&acc">bag&acc</option>
                        </select>
                    </InputSet>

                    <InputSet>
                        <label htmlFor="register-name">이름</label>
                        <input
                            type="text"
                            id="register-name"
                            placeholder="상품 이름"
                        />
                    </InputSet>

                    <InputSet>
                        <InputSet>
                            <label htmlFor="register-price">가격</label>
                            <input
                                type="text"
                                id="register-price"
                                placeholder="가격"
                            />
                        </InputSet>
                        <InputSet>
                            <label htmlFor="register-stock">재고</label>
                            <input
                                type="text"
                                id="register-price"
                                placeholder="재고"
                                value={3000}
                            />
                        </InputSet>
                    </InputSet>

                    <InputSet>
                        <label htmlFor="register-description">상세 설명</label>
                        <input
                            type="text"
                            id="register-description"
                            placeholder="설명 입력"
                            value={3000}
                        />
                    </InputSet>
                </RegisterDetail>
                */}
            </RegisterItemForm>
        </>
    );
}

export default Resiger;
