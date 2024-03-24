import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PiPlusSquare } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const CardStyle = styled.div`
    cursor: pointer;
`;

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
    display: flex;
    gap: 0.2rem;
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

const Card = ({ category, itemInfo }) => {
    const sizeCategory = {
        apparel: ["XS", "S", "M", "L", "XL", "XXL"],
        cap: ["F"],
        shoes: ["230", "240", "250", "260", "270", "280"],
    };
    const randomSize = sizeCategory[category]?.slice(
        0,
        Math.floor(Math.random() * sizeCategory[category].length + 1) + 1
    );

    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();
    const MoveDetailItem = (id) => {
        navigate(`/products/${category}/${id}`, {
            state: { data: itemInfo, size: randomSize },
        });
    };

    const [special, setSpecial] = useState({});
    useEffect(() => {
        /* 상품 특징 랜덤 꾸미기 */
        let radomNum = Math.floor(Math.random() * 4);
        let selectSpecial = [
            {
                text: "[노정의 착용]",
                color: "#a12ce7",
            },
            {
                text: "",
                color: "black",
            },
            { text: "[서울시리즈 기념]", color: "#4094eb" },
            { text: "[신상품]", color: "green" },
        ][radomNum];
        setSpecial(selectSpecial);
    }, []);

    return (
        <CardStyle onClick={() => MoveDetailItem(itemInfo.id)}>
            <StyledProductImg
                // src={isHover ? sampleUrl : imgURL}
                src={itemInfo.imgURLs[0]?.imageURL}
                alt={itemInfo.name}
                $isHover={isHover}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            />

            <StyledProductIntroduction>
                <StyledProductIntroductionName>
                    <span style={{ color: special.color }}>{special.text}</span>
                    <span>{itemInfo.name}</span>
                </StyledProductIntroductionName>

                <div>{Number(itemInfo.price).toLocaleString("ko-KR")}원</div>

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
        </CardStyle>
    );
};

export default Card;
