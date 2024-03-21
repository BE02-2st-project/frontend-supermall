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

const ProductFilterColorContainer = styled.div`
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
  margin-left: 80px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: flex-start; ///
  white-space: pre-wrap;
  flex-wrap: wrap;
  row-gap: 1rem;
`;

const SizeCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 15px;
  height: 15px;
`; //  체크박스 스타일

const SizeLabel = styled.label`
  margin-right: 50px;
`; // 레이블 스타일

///

const PDColorButton = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 0.4rem;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => (props.clicked ? "3px solid white" : "none")};
  outline: ${(props) => (props.clicked ? "1px solid black" : "none")};
  &:hover {
    cursor: pointer;
  }
`;

const PDColorOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  cursor: pointer;
  font-weight: ${(props) => (props.clicked ? "bold" : "normal")};
`;

const ColorLabel = styled.label`
  margin-right: 100px;
`;

const colors = [
  { name: "red", code: "#d4003b" },
  { name: "gray", code: "#969a9b" },
  { name: "brown", code: "#663d25" },
  { name: "violet", code: "#5a4089" },
  { name: "pink", code: "#f27ead" },
  { name: "blue", code: "#2e4daf" },
  { name: "skyblue", code: "#819bd2" },
  { name: "mustard", code: "#d89f2f" },
  { name: "beige", code: "#d3ba9c" },
];

const ProductFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButtons, setSelectedButtons] = useState([]);

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

  const handleSelect = (color) => {
    setSelectedButtons((prev) => {
      if (prev.includes(color)) {
        return prev.filter((c) => c !== color);
      } else {
        return [...prev, color];
      }
    });
  };

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

        <ProductFilterColorContainer>
          <ProductFilterPickedColor>컬러</ProductFilterPickedColor>
          <FilterForm>
            {colors.map(({ name, code }) => (
              <PDColorOption
                key={name}
                clicked={selectedButtons.includes(name)}
                onClick={() => handleSelect(name)}
              >
                <PDColorButton
                  bgColor={code}
                  clicked={selectedButtons.includes(name)}
                />
                {name.toUpperCase()}
              </PDColorOption>
            ))}
          </FilterForm>
        </ProductFilterColorContainer>
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
