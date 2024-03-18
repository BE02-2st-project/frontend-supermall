import React from "react";
import styled from "styled-components";
import { PiPlusSquare } from "react-icons/pi";

const StyledContainer = styled.div`
  width: 430px;
  height: 605px;
  display: flex;
  justify-content: center;
`;

///카드
const StyledCard = styled.div`
  width: 430px;
  height: 510px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

///카드이미지
const StyledProductImg = styled.img`
  width: 415px;
  height: 415px;
  background-image: url("https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_640.jpg");
  background-size: cover;
  transition: background-image 0.3s ease;

  &:hover {
    background-image: url("https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg");
  }
`;

///

/// 사진밑에 상품설명
const StyledProductIntroduction = styled.div`
  width: 407px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  top: 20px;
`;

/// 사진밑에 상품이름
const StyledProductIntroductionName = styled.div`
  font-size: 14px;
  letter-spacing: -1px;
`;

/// 사진밑에 상품가격
const StyledProductIntroductionPrice = styled.div`
  font-size: 14px;
  position: relative;
  top: 17px;
`;

/// 사진밑에 상품색깔
const StyledProductIntroductionColor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  top: 36px;
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

const Card = ({ id, title, body }) => {
  return (
    <StyledContainer>
      <StyledCard>
        <div>
          <StyledProductImg />
        </div>
        <StyledProductIntroduction>
          <StyledProductIntroductionName>
            <span style={{ color: "#a12ce7" }}>[노정의 착용]</span> 컬시브
            레터링 언스트럭쳐 볼캡 뉴욕양키스
          </StyledProductIntroductionName>

          <StyledProductIntroductionPrice>
            39,000원
          </StyledProductIntroductionPrice>

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
      </StyledCard>
    </StyledContainer>
  );
};

export default Card;
