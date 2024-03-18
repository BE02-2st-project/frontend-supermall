import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const StyledAdjust = styled(TbAdjustmentsHorizontal)`
  font-size: 1rem;
  color: #141414;
  margin-left: 80px;
  font-weight: bold;
`;

const StyledAdjust2 = styled(TbAdjustmentsHorizontal)`
  font-size: 1rem;
  color: #141414;
  margin-left: 80px;
  font-weight: bold;
  position: relative; /* 요소의 위치 조정을 위해 추가 */
  top: 2px;
`;

const ProductFilterContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 5;
`;

const ProductFilterButton = styled.button`
  width: 155px;
  height: 40px;
  background-color: #ffffff;
  color: #000018;
  padding: 10px;
  font-size: 13px;
  border: 1px solid #dddddd;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
  padding-left: 20px;
`;

const ProductFilterContent = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  background-color: #ffffff;
  width: 1120px;
  // height: 530px;
  height: 600px;
  z-index: 0;
  top: 0;
  left: -960px;
  border: 1px solid #313131;
`;

const ProductFilterPickedHeader = styled.div`
  height: 40px;
  width: 1120px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #f8f8f8;
`;

const ProductFilterPickedHeaderElement = styled.div`
  font-size: 13px;
  font-weight: bold;
  padding: 10px 10px 10px 10px;
  margin-right: 3px;
  position: relative; /* 요소의 위치 조정을 위해 추가 */
  top: -2.5px;
  &:hover {
    cursor: pointer;
  }
`;

////////////////////

const ProductFilterPickedSizeRow = styled.div`
  height: 95px;
  width: 1035px;
  margin: 0 40px 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // background-color: #ffffff;
  background-color: white;
  border-top: 1px solid #ececec;
`;

const ProductFilterPickedSize = styled.div`
  font-size: 22px;
  font-weight: bolder;
`;

const ProductFilterPickedColorRow = styled.div`
  height: 200px;
  width: 1035px;
  margin: 0 40px 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;

  border-top: 1px solid #ececec;
`;

const ProductFilterPickedColor = styled.div`
  font-size: 22px;
  font-weight: bolder;
`;
///////////////

const ProductFilterPickedPriceRow = styled.div`
  height: 120px;
  width: 1035px;
  margin: 0 40px 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #ececec;
`;

const ProductFilterPickedPrice = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

///////
const ProductFilterPickedSelectRow = styled.div`
  height: 106px;
  width: 1035px;
  margin: 0 40px 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // background-color: #ffffff;
  background-color: white;
  border-top: 1px solid #ececec;
`;

const FilterForm = styled.form`
  margin-left: 170px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start; ///
`;

const SizeCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 15px;
  height: 15px;
`; //  체크박스 스타일

const SizeLabel = styled.label`
  margin-right: 50px;
`; // 레이블 스타일

///

const ColorCheckButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: red;
  &:hover {
    cursor: pointer;
  }
`;

const ColorLabel = styled.label`
  margin-right: 100px;
`;

const ProductFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <ProductFilterContainer ref={ref}>
      <ProductFilterButton onClick={() => setIsOpen(!isOpen)}>
        필터 <StyledAdjust />
      </ProductFilterButton>
      <ProductFilterContent $isOpen={isOpen}>
        <ProductFilterPickedHeader>
          <ProductFilterPickedHeaderElement onClick={() => setIsOpen(false)}>
            필터
            <StyledAdjust2 />
          </ProductFilterPickedHeaderElement>
        </ProductFilterPickedHeader>

        <ProductFilterPickedSizeRow>
          <ProductFilterPickedSize>사이즈</ProductFilterPickedSize>
          <FilterForm>
            <SizeCheckbox id="10" />
            <SizeLabel htmlFor="10">10</SizeLabel>

            <SizeCheckbox id="20" />
            <SizeLabel htmlFor="20">20</SizeLabel>

            <SizeCheckbox id="30" />
            <SizeLabel htmlFor="30">30</SizeLabel>

            <SizeCheckbox id="40" />
            <SizeLabel htmlFor="40">40</SizeLabel>

            <SizeCheckbox id="50" />
            <SizeLabel htmlFor="50">50</SizeLabel>
          </FilterForm>
        </ProductFilterPickedSizeRow>

        <ProductFilterPickedColorRow>
          <ProductFilterPickedColor>컬러</ProductFilterPickedColor>
          <FilterForm>
            <ColorCheckButton />
            10
            <ColorCheckButton />
            20
            <ColorCheckButton />
            30
            <ColorCheckButton />
            40
          </FilterForm>
        </ProductFilterPickedColorRow>
        <ProductFilterPickedPriceRow>
          <ProductFilterPickedPrice>가격</ProductFilterPickedPrice>
        </ProductFilterPickedPriceRow>

        <ProductFilterPickedSelectRow>
          <button>초기화</button>
          <button>검색</button>
        </ProductFilterPickedSelectRow>
      </ProductFilterContent>
    </ProductFilterContainer>
  );
};

export default ProductFilter;
