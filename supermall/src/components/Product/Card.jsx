import React, { useState } from "react";
import styled from "styled-components";
import { PiPlusSquare } from "react-icons/pi";

///카드이미지
const StyledProductImg = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    transition: 0.2s ease;
    background-color: ${(props) => (props.$isHover ? "#ddd" : "transparent")};
`;

/// 사진밑에 상품설명
const StyledProductIntroduction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    gap: 1rem;
    font-size: 1rem;
`;

/// 사진밑에 상품이름
const StyledProductIntroductionName = styled.div`
    font-size: 1rem;
    letter-spacing: -1px;
`;

/// 사진밑에 상품색깔
const StyledProductIntroductionColor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledProductIntroductionColorBox = styled.div`
    height: 15px;
    width: 15px;
    margin-right: 9px;
`;

/// 색깔 플러스 아이콘
const StyledPlusImg = styled(PiPlusSquare)`
    font-size: 1.3rem;
    position: relative;
    top: -2.4px;
    left: 4px;
`;

const Card = ({ name, price, imgURL }) => {
    const [isHover, setIsHover] = useState(false);
    const sampleUrl =
        "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_640.jpg";

    return (
        <div>
            <StyledProductImg
                // src={isHover ? sampleUrl : imgURL}
                src={imgURL}
                alt={`${name} image`}
                $isHover={isHover}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            />

            <StyledProductIntroduction>
                <StyledProductIntroductionName>
                    <span style={{ color: "#a12ce7" }}>[노정의 착용]</span>
                    {name}
                </StyledProductIntroductionName>

                <div>{price}원</div>

                <StyledProductIntroductionColor>
                    <StyledProductIntroductionColorBox
                        style={{ backgroundColor: "#000000" }} /// 색깔 코드
                    />
                    <StyledProductIntroductionColorBox
                        style={{ backgroundColor: "#07513e" }} /// 색깔 코드
                    />
                    <StyledProductIntroductionColorBox
                        style={{ backgroundColor: "#000000" }} /// 색깔 코드
                    />
                    <StyledProductIntroductionColorBox
                        style={{ backgroundColor: "#111c38" }} /// 색깔 코드
                    />
                    <StyledProductIntroductionColorBox
                        style={{ backgroundColor: "#ba987c" }} /// 색깔 코드
                    />
                    <StyledProductIntroductionColorBox>
                        <StyledPlusImg />
                    </StyledProductIntroductionColorBox>
                </StyledProductIntroductionColor>
            </StyledProductIntroduction>
        </div>
    );
};

export default Card;
