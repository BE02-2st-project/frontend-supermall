import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineShare } from "react-icons/hi";
import { TiHeartOutline } from "react-icons/ti";
import { BsQuestionSquare } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import ConfirmModal from "../common/ConfirmModal";
import LoginModal from "../common/LoginModal";

// 전체 박스 (이미지 -> 컨트롤박스 -> 상세이미지 순서)
const ProductDetailBackground = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        left: 0px;

        @media screen and (min-width: 1300px) {
            /* align-items: center; */
        }
    }
`;

const HiddenContainer = styled.div`
    width: 400px;
    height: 100%;
    @media screen and (min-width: 1300px) {
        display: none;
    }
`;

const TopContainer = styled.div`
    @media screen and (max-width: 1300px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

//
const DetailImageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-bottom: 1px solid #dddddd; */
`;

const ProductDetailPhotos = styled.div`
    display: flex;
    overflow: scroll;
    justify-content: center;
    align-items: center;
    img {
        width: 300px;
    }
`;

/* =========== 고정 ============ */
const ProductDetailFixedBar = styled.div`
    width: 500px;
    height: 100%;
    background-color: ${(props) =>
        props.$modalOn ? "rgba(0, 0, 0, 0.2)" : "white"};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem 0.5rem 1rem 0.5rem;
    z-index: 3;

    @media screen and (min-width: 1030px) {
        width: 450px;
        top: 2rem;
        right: 2rem;
        position: fixed;
        margin: 2rem 1rem;
    }
`;

const ControlHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    h1 {
        font-size: 1.6rem;
    }
`;

const ProductDetailEvaluation = styled.div`
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0.2rem;
    border-bottom: 1px solid #ddd;
`;

const EvaluationIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const DetailSelectBox = styled.div`
    padding: 1rem 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
`;

const SelectLine = styled.div`
    display: flex;
    font-size: 0.9rem;
    align-items: ${(props) => (props.$pos ? "flex-start" : "center")};
    > div:nth-child(1) {
        width: 100px;
    }

    > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
    }
`;

const SelectColorOption = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
`;

/* 사이즈 */
const SelectSizeOption = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    input {
        appearance: none;
    }
`;

const SizeLabel = styled.label`
    padding: 0.2rem 1rem;
    text-align: center;
    color: #666;
    border: 1px solid #ddd;
    cursor: pointer;
    background-color: ${(props) => (props.$inputState ? "#ddd" : "white")};
`;

/* 수량 */
const ProductDetailNumberOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.1rem;
`;

const ProductDetailNumberButton = styled.button`
    width: 30px;
    height: 30px;
    font-size: 1rem;
    background-color: white;
    border: 1px solid #ddd;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledNonArrowInput = styled.input`
    border: 1px solid #ddd;
    width: 40px;
    height: 30px;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        outline: 1px solid black;
    }
`;

/* 혜택, 배달 */
const ProductDetailBenefitOption = styled.div`
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
    color: #7a7a7a;
`;

const SelectDeliveryContainer = styled.div`
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    color: #7a7a7a;
    width: 100%;
    gap: 2rem;
`;

const DeliveryOption = styled.div`
    font-size: 13px;
    color: #464646;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    accent-color: black;
`;

const StyledQuestionSquare = styled(BsQuestionSquare)`
    font-size: 1.3rem;
    color: #666;
    cursor: pointer;
`;

/* 버튼 */
const ProductDetailOrder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
`;

const PurchaseButton = styled.button`
    width: 100%;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    background-color: black;
    border-radius: 5px;
    border: none;
    padding: 1rem;
    cursor: pointer;
`;

const InCartButton = styled(PurchaseButton)`
    color: black;
    background-color: #e9e9e9;
`;

const AdditionalInform = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    letter-spacing: -1px;
    color: #999;
    gap: 1rem;
    margin-bottom: 3rem;
`;

/* ======== 상세이미지 ===== */
const DetailMoreImages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ProductDetailMenu = styled.div`
    width: 100%;
    height: 65px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4f4c4b;
    font-size: 12px;
    font-weight: bold;
    border-top: 4px solid #000000;
    border-bottom: 1px solid #000000;
`;

function ProductDetail() {
    /* 현재 페이지 상품 데이터 */
    const navigate = useNavigate();
    const location = useLocation();
    const itemInfo = location.state.data;
    const randomNum = Math.floor(Math.random() * 5) + 1;
    const randomSize = location.state.size;

    /* Select */
    const [count, setCount] = useState(1);
    const [selectSize, setSelectSize] = useState("");
    const handleSizeSelect = (event) => {
        setSelectSize(event.target.value);
    };

    /* Modal */
    const [loginModal, setLoginModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);

    /* 바로 주문하기 - id, count만*/
    const handleClickOrder = () => {
        if (selectSize) {
            const userLogin = Boolean(localStorage.getItem("accessToken"));
            if (userLogin) {
                // POST 요청
                fetch("http://43.202.211.22:8080/api/order", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        itemId: itemInfo.id,
                        count: count,
                    }),
                }).then((res) => res.json());
            } else {
                setLoginModal(true);
            }
        } else {
            alert("사이즈를 선택하세요");
        }
    };

    /* 장바구니에 넣기 - id, count만 */
    const handleClickCart = () => {
        if (selectSize) {
            const userLogin = localStorage.getItem("accessToken");
            setConfirmModal(true);
            if (Boolean(userLogin)) {
                // POST 요청
                fetch("http://43.202.211.22:8080/api/cart", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify({
                        itemId: itemInfo.id,
                        count: count,
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data));
            }
        } else {
            alert("사이즈를 선택하세요");
        }
    };

    return (
        <ProductDetailBackground>
            <div>
                <TopContainer>
                    <DetailImageBox>
                        <div>
                            <img src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20231226/3ACP6601N-50CGS-119577332567875203.png/dims/resize/828x828" />
                        </div>
                        <ProductDetailPhotos>
                            <img src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20231226/3ACP6601N-50CGS-119577332567875203.png/dims/resize/828x828" />
                            <img src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20231226/3ACP6601N-50CGS-119577332567875203.png/dims/resize/828x828" />
                            <img src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20231226/3ACP6601N-50CGS-119577332567875203.png/dims/resize/828x828" />
                        </ProductDetailPhotos>
                    </DetailImageBox>

                    <ProductDetailFixedBar
                        $modalOn={loginModal && confirmModal}
                    >
                        <ControlHeader>
                            <h1>{itemInfo.name}</h1>
                            <div>{itemInfo.price.toLocaleString()}원</div>
                            <ProductDetailEvaluation>
                                <div>
                                    {[...Array(randomNum)].map((n, index) => (
                                        <MdOutlineStar key={index} />
                                    ))}
                                    {[...Array(5 - randomNum)].map(
                                        (n, index) => (
                                            <MdOutlineStarBorder key={index} />
                                        )
                                    )}
                                </div>
                                <EvaluationIcons>
                                    <HiOutlineShare />
                                    <TiHeartOutline />
                                </EvaluationIcons>
                            </ProductDetailEvaluation>
                        </ControlHeader>

                        <DetailSelectBox>
                            <SelectLine>
                                <div>색상/팀</div>
                                <div>
                                    <SelectColorOption src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20230918/3ACP6601N-45CAS-111026574716200924.png/dims/resize/38x51" />
                                    <SelectColorOption src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20230908/3ACP6601N-43MTD-110157555778449602.png/dims/resize/38x51" />
                                </div>
                            </SelectLine>

                            <SelectLine>
                                <div>사이즈</div>
                                <SelectSizeOption>
                                    {randomSize.map((size, index) => (
                                        <SizeLabel
                                            key={index}
                                            $inputState={size === selectSize}
                                            name="size"
                                        >
                                            <input
                                                type="radio"
                                                value={size}
                                                name="size"
                                                onChange={handleSizeSelect}
                                            />
                                            {size}
                                        </SizeLabel>
                                    ))}
                                </SelectSizeOption>
                            </SelectLine>

                            <SelectLine>
                                <div>수량</div>
                                <ProductDetailNumberOptions>
                                    <ProductDetailNumberButton
                                        onClick={() => {
                                            if (count > 1) setCount(count - 1);
                                        }}
                                    >
                                        <FiMinus />
                                    </ProductDetailNumberButton>
                                    <StyledNonArrowInput
                                        type="number"
                                        value={count}
                                        onChange={(e) =>
                                            setCount(e.target.value)
                                        }
                                    />
                                    <ProductDetailNumberButton
                                        onClick={() => {
                                            setCount(count + 1);
                                        }}
                                    >
                                        <FaPlus />
                                    </ProductDetailNumberButton>
                                </ProductDetailNumberOptions>
                            </SelectLine>

                            <SelectLine $pos={"flex-start"}>
                                <div>혜택</div>
                                <ProductDetailBenefitOption>
                                    <p>신규 회원가입 시 1만 마일리지 적립</p>
                                    <p>첫 구매 시 10% 할인 쿠폰 지급</p>
                                    <p>리뷰 작성 시 최대 1천 마일리지 적립</p>
                                    <p>전 상품 무료반품 서비스 제공</p>
                                </ProductDetailBenefitOption>
                            </SelectLine>

                            <SelectLine>
                                <div>배달</div>
                                <SelectDeliveryContainer>
                                    <DeliveryOption>
                                        <input
                                            type="radio"
                                            name="delivery"
                                            id="free"
                                            defaultChecked={true}
                                        />
                                        <label htmlFor="free">무료배송</label>
                                        <StyledQuestionSquare />
                                    </DeliveryOption>
                                    <DeliveryOption>
                                        <input
                                            type="radio"
                                            name="delivery"
                                            id="pickup"
                                        />
                                        <label htmlFor="pickup">매장픽업</label>
                                        <StyledQuestionSquare />
                                    </DeliveryOption>
                                </SelectDeliveryContainer>
                            </SelectLine>

                            <ProductDetailOrder>
                                <PurchaseButton onClick={handleClickOrder}>
                                    바로구매
                                </PurchaseButton>
                                <InCartButton onClick={handleClickCart}>
                                    장바구니
                                </InCartButton>
                            </ProductDetailOrder>
                        </DetailSelectBox>

                        <AdditionalInform>
                            <div>
                                [UNISEX] 스포티브 바시티 엠블럼 언스트럭쳐 볼캡
                                클리블랜드 가디언스
                            </div>
                            <SelectLine>
                                <div>상품코드</div>
                                <div> 3ACPV094N-45PKM</div>
                            </SelectLine>
                        </AdditionalInform>
                    </ProductDetailFixedBar>
                </TopContainer>

                {loginModal && <LoginModal setIsOpen={setLoginModal} />}
                {confirmModal && (
                    <ConfirmModal
                        setIsOpen={setConfirmModal}
                        title="장바구니 담기 완료"
                        confirmText="상품이 장바구니에 담겼습니다."
                        leftText="계속 쇼핑하기"
                        rightText="장바구니 보기"
                        onClickConfirm={() => navigate("/cart")}
                    />
                )}

                <DetailMoreImages>
                    <ProductDetailMenu>상품정보</ProductDetailMenu>
                    <img src="https://static.mlb-korea.com/images/display/content/img_detail/2020/0.SABANGNET/1MLB/2MLBkr/MLBdetail/3ACP6601N-50BKS.jpg?v=1" />
                    <img src="https://static.mlb-korea.com/images/display/content/img_detail/2020/0.SABANGNET/1MLB/2MLBkr/MLBcolor/3ACP6601N-color.jpg" />
                    <img src="https://prd-static-fnf-online-mall.s3.ap-northeast-2.amazonaws.com/webresource/mlb-korea/images/display/content/img_detail/2020/0.SABANGNET/1MLB/1MLBmd1/3ACP6601N-50BKS-md1.jpg" />
                    <img src="https://static.mlb-korea.com/images/display/content/img_detail/2020/0.SABANGNET/SIZEGUIDE/1N_COVER_FIT_BO.jpg" />
                </DetailMoreImages>
            </div>
            <HiddenContainer></HiddenContainer>
        </ProductDetailBackground>
    );
}

export default ProductDetail;
