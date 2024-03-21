import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineShare } from "react-icons/hi";
import { TiHeartOutline } from "react-icons/ti";
import { IoStarOutline } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const ProductDetailBackground = styled.div`
    width: 1330px;
    height: 100vh;
    background-color: #ffffff;
    margin-left: 287px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;
/// 왼쪽 설명창
const ProductDetailIntroduction = styled.div`
    width: 900px;
    height: 17800px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    border-bottom: 1px solid #dddddd;
`;

const ProductDetailPhotos = styled.div`
    width: 900px;
    height: 950px;
`;

const ProductDetailPhotosImg = styled.img`
    width: 600px;
    height: 600px;
    margin-left: 130px;
`;

const ProductDetailMenu = styled.div`
    width: 900px;
    height: 65px;
    color: #4f4c4b;
    font-size: 12px;
    font-weight: bold;
    border-top: 4px solid #000000;
    border-bottom: 1px solid #000000;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ProductDetailImg = styled.img`
    margin-bottom: 10px;
`;

/////////////////////////오른쪽 고정된 구매창
const ProductDetailFixedBar = styled.div`
    width: 370px;
    height: 1000px;
    background-color: white;
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 80px;
    left: 1185px;
    z-index: 3;
`;

const ProductDetailName = styled.div`
    width: 370px;
    font-size: 22px;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 6px;
`;

const ProductDetailPrice = styled.div`
    width: 370px;
    font-size: 22px;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 16px;
`;

const ProductDetailEvaluation = styled.div`
    width: 370px;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    border-bottom: 1px solid #7a7a7a;
`;

const ProductDetailReviewCount = styled.div`
    width: 370px;
    font-size: 17px;
    font-weight: 400;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 16px;
    color: #4f4c4b;
`;

const ProductDetailEvaluationLeft = styled.div`
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;
const ProductDetailEvaluationRight = styled.div`
    width: 120px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
`;

const StyledStarIcon = styled.div`
    width: 30px;
    max-height: 30px;
`;

const StyledStarIconImg = styled(IoStarOutline)`
    font-size: 1.3rem;
`;

const StyledShareIcon = styled.div`
    width: 30px;
    max-height: 30px;
`;
const StyledShareIconImg = styled(HiOutlineShare)`
    font-size: 1.3rem;
`;

const StyledHeartIcon = styled.div`
    width: 30px;
    max-height: 30px;
`;
const StyledHeartIconImg = styled(TiHeartOutline)`
    font-size: 1.3rem;
`;

const ProductDetailColors = styled.div`
    width: 370px;

    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 8px;
`;

const ProductDetailColor = styled.div`
    width: 120px;
    height: auto;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #7a7a7a;
`;

const ProductDetailColorOptions = styled.div`
    width: 250px;
    height: auto;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const ProductDetailColorOption = styled.div`
    width: 42px;
    height: 42px;
    background-color: #f8f8f8;
    border: 1px solid #dddddd;
    margin-bottom: 10px;
`;

const ProductDetailColorOptionImg = styled.img`
    font-size: 1rem;
`;

const ProductDetailSizes = styled.div`
    width: 370px;
    height: 54px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    // margin-top: 8px;
`;

const ProductDetailTitle = styled.div`
    width: 120px;
    height: 54px;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #7a7a7a;
`;

const ProductDetailSizeOptions = styled.div`
    width: 250px;
    height: 54px;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

const ProductDetailSizeOption = styled.button`
    width: 40px;
    height: 20px;
    background-color: white;
    border: ${(props) => (props.$isActive ? "1px solid #dddddd;" : "")};
    margin-right: 10px; //////// F S L 사이즈버튼 간격주기
`;

const ProductDetailNumbers = styled.div`
    width: 370px;
    height: 54px;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const ProductDetailNumberOptions = styled.div`
    width: 250px;
    height: 54px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    align-items: center;
`;

const ProductDetailNumberButton = styled.button`
    width: 30px;
    height: 30px;
    font-size: 25px;
    background-color: white;
    border: 1px solid #7a7a7a;
`;

const StyledNonArrowInput = styled.input`
    border: 1px solid #7a7a7a;
    width: 40px;
    height: 30px;
    text-align: right;
    input::-webkit-outer-spin-button input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

/////////////

const ProductDetailBenefits = styled.div`
    width: 370px;
    height: 54px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 15px;
    margin-top: 10px;
`;

const ProductDetailBenefit = styled.div`
    width: 120px;
    height: 85px;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    color: #7a7a7a;
`;

const ProductDetailBenefitOption = styled.div`
    width: 250px;
    height: 85px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #7a7a7a;
`;

const ProductDetailDeliverys = styled.div`
    width: 370px;
    height: 54px;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 15px;
`;

const ProductDetailDeliveryOptions = styled.div`
    width: 250px;
    height: 54px;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #7a7a7a;
`;

const DeliveryOption = styled.div`
    width: 100px;
    height: 24px;
    font-size: 13px;
    color: #464646;
    display: flex;
    align-items: center;
`;

const StyledQuestionSquare = styled(BsQuestionSquare)`
    font-size: 1.3rem;
    margin-left: 7px;
    &:hover {
        cursor: pointer;
    }
`;

const ProductDetailOrder = styled.div`
    width: 370px;
    height: 120px;
    display: flex;
    flex-direction: column;
    padding-bottom: 150px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
`;

const ProductDetailPurchase = styled.button`
    width: 370px;
    height: 55px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    background-color: #000000;
    border-radius: 5px;
    border: 0;
    margin-bottom: 8px;
`;
const ProductDetailPocket = styled.button`
    width: 370px;
    height: 55px;
    color: black;
    font-size: 14px;
    font-weight: bold;
    background-color: #e9e9e9;
    border-radius: 5px;
    border: 0;
`;

const ProductDetailPresentProduct = styled.div`
    width: 370px;
    height: 40px;
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    font-size: 13px;
    letter-spacing: -1px;
    color: #7a7a7a;
`;

function ProductDetail() {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState(1);

    const location = useLocation();
    const itemInfo = location.state.itemInfo;
    console.log("itemInfo");
    console.log(itemInfo);

    const ProductDetailSizeChoice = () => {
        setIsActive(!isActive);
    };

    return (
        <ProductDetailBackground>
            <ProductDetailIntroduction>
                <ProductDetailPhotos>
                    <ProductDetailPhotosImg src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20231226/3ACP6601N-50CGS-119577332567875203.png/dims/resize/828x828" />
                    <ProductDetailMenu>상품정보</ProductDetailMenu>
                    <ProductDetailImg src="https://static.mlb-korea.com/images/display/content/img_detail/2020/0.SABANGNET/1MLB/2MLBkr/MLBdetail/3ACP6601N-50BKS.jpg?v=1" />
                    <ProductDetailImg src="https://static.mlb-korea.com/images/display/content/img_detail/2020/0.SABANGNET/1MLB/2MLBkr/MLBcolor/3ACP6601N-color.jpg" />
                    <ProductDetailImg src="https://prd-static-fnf-online-mall.s3.ap-northeast-2.amazonaws.com/webresource/mlb-korea/images/display/content/img_detail/2020/0.SABANGNET/1MLB/1MLBmd1/3ACP6601N-50BKS-md1.jpg" />
                    <ProductDetailImg src="https://static.mlb-korea.com/images/display/content/img_detail/2020/0.SABANGNET/SIZEGUIDE/1N_COVER_FIT_BO.jpg" />
                </ProductDetailPhotos>
            </ProductDetailIntroduction>

            <ProductDetailFixedBar>
                <ProductDetailName>
                    N-COVER 언스트럭쳐 볼캡 <br />
                    뉴욕양키스
                </ProductDetailName>
                <ProductDetailPrice>36,000원</ProductDetailPrice>
                <ProductDetailEvaluation>
                    <ProductDetailEvaluationLeft>
                        <StyledStarIcon>
                            <StyledStarIconImg />
                        </StyledStarIcon>
                        <ProductDetailReviewCount>
                            (5,902)
                        </ProductDetailReviewCount>
                    </ProductDetailEvaluationLeft>
                    <ProductDetailEvaluationRight>
                        <StyledShareIcon>
                            <StyledShareIconImg />
                        </StyledShareIcon>
                        <StyledHeartIcon>
                            <StyledHeartIconImg />
                        </StyledHeartIcon>
                        <ProductDetailReviewCount>
                            (294)
                        </ProductDetailReviewCount>
                    </ProductDetailEvaluationRight>
                </ProductDetailEvaluation>

                <ProductDetailColors>
                    <ProductDetailColor>색상/팀</ProductDetailColor>
                    <ProductDetailColorOptions>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20230918/3ACP6601N-45CAS-111026574716200924.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20230908/3ACP6601N-43MTD-110157555778449602.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20230918/3ACP6601N-43BDS-111026505394199467.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20230908/3ACP6601N-09NYS-110157065983776650.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20230822/3ACP6601N-45PKD-108691677508090793.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/ec/M21N3ACP6601N45RBS/thnail/AF779ACD8D2E484DA472A47DDCFE50B6.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/ec/M21N3ACP6601N07BLD/thnail/E78981BB05EE41A398DACF50A2A6CF6C.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/ec/M21N3ACP6601N07COM/thnail/A3A92E6A26B04E83B8D490DF9CF3F3AF.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20230918/3ACP6601N-45CAS-111026574716200924.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                        <ProductDetailColorOption>
                            <ProductDetailColorOptionImg src="https://static-resource.mlb-korea.com/images/goods/thnail/m/20230908/3ACP6601N-43MTD-110157555778449602.png/dims/resize/38x51" />
                        </ProductDetailColorOption>
                    </ProductDetailColorOptions>
                </ProductDetailColors>
                <ProductDetailSizes>
                    <ProductDetailTitle>사이즈</ProductDetailTitle>
                    <ProductDetailSizeOptions>
                        <ProductDetailSizeOption
                            $isActive={isActive}
                            onClick={ProductDetailSizeChoice}
                        >
                            F
                        </ProductDetailSizeOption>
                        <ProductDetailSizeOption
                            $isActive={isActive}
                            onClick={ProductDetailSizeChoice}
                        >
                            S
                        </ProductDetailSizeOption>
                        <ProductDetailSizeOption
                            $isActive={isActive}
                            onClick={ProductDetailSizeChoice}
                        >
                            L
                        </ProductDetailSizeOption>
                    </ProductDetailSizeOptions>
                </ProductDetailSizes>
                <ProductDetailNumbers>
                    <ProductDetailTitle>수량</ProductDetailTitle>
                    <ProductDetailNumberOptions>
                        <ProductDetailNumberButton
                            onClick={() => {
                                if (value > 1) setValue(value - 1);
                            }}
                        >
                            -
                        </ProductDetailNumberButton>
                        <StyledNonArrowInput
                            type="number"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <ProductDetailNumberButton
                            onClick={() => {
                                setValue(value + 1);
                            }}
                        >
                            +
                        </ProductDetailNumberButton>
                    </ProductDetailNumberOptions>
                </ProductDetailNumbers>

                <ProductDetailBenefits>
                    <ProductDetailBenefit>혜택</ProductDetailBenefit>
                    <ProductDetailBenefitOption>
                        <p>신규 회원가입 시 1만 마일리지 적립</p>
                        <p>첫 구매 시 10% 할인 쿠폰 지급</p>
                        <p>리뷰 작성 시 최대 1천 마일리지 적립</p>
                        <p>전 상품 무료반품 서비스 제공</p>
                    </ProductDetailBenefitOption>
                </ProductDetailBenefits>

                <ProductDetailDeliverys>
                    <ProductDetailTitle>배달</ProductDetailTitle>
                    <ProductDetailDeliveryOptions>
                        <DeliveryOption>
                            <input
                                style={{ marginRight: "5px" }}
                                type="radio"
                            />
                            무료배송
                            <StyledQuestionSquare />
                        </DeliveryOption>
                        <DeliveryOption>
                            <input
                                style={{ marginRight: "5px" }}
                                type="radio"
                            />
                            매장픽업
                            <StyledQuestionSquare />
                        </DeliveryOption>
                    </ProductDetailDeliveryOptions>
                </ProductDetailDeliverys>

                <ProductDetailOrder>
                    <ProductDetailPurchase>바로구매</ProductDetailPurchase>
                    <ProductDetailPocket>장바구니</ProductDetailPocket>
                </ProductDetailOrder>

                <ProductDetailPresentProduct>
                    [UNISEX] 스포티브 바시티 엠블럼 언스트럭쳐 볼캡 클리블랜드{" "}
                    <br />
                    가디언스
                </ProductDetailPresentProduct>
                <ProductDetailPresentProduct>
                    <span style={{ marginRight: "50px" }}>상품코드</span>
                    <span> 3ACPV094N-45PKM</span>
                </ProductDetailPresentProduct>
            </ProductDetailFixedBar>
        </ProductDetailBackground>
    );
}

export default ProductDetail;
