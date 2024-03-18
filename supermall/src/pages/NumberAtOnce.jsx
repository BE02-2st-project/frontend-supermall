import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";

const StyledArrowDown = styled(SlArrowDown)`
  font-size: 1rem;
  color: #141414;
  margin-left: 46px;
  font-weight: bold;
`;

const StyledArrowDown2 = styled(SlArrowDown)`
  font-size: 1rem;
  color: #141414;
  margin-left: 40px;
  font-weight: bold;
  position: relative; /* 요소의 위치 조정을 위해 추가 */
  top: 2px;
  right: -3.5px;
`;

const NumberAtOnceContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const NumberAtOnceButton = styled.button`
  width: 155px;
  height: 40px;
  background-color: #ffffff;
  color: #000018;
  padding: 10px;
  font-size: 13px;
  border: 1px solid #dddddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
`;

const NumberAtOnceContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #ffffff;
  min-width: 143px;
  z-index: 1;
  border: 1px solid black;
  height: 130px;
  top: -0px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 10px;
`;

const NumberAtOnceContentPicked = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0;
  height: 35px;
  font-weight: bold;
  position: relative; /* 요소의 위치 조정을 위해 추가 */
  top: 1.25px;
  right: 0.5px;
`;

const NumberAtOnceContentSubelement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-weight: normal;
  margin-left: 10px;
`;

// const NumberAtOnceContentElement = styled.p`
//   height: 5px;
//   line-height: 5px;
//   font-weight: 300;
//   &:hover {
//     font-weight: 500;
//     background-color: yellow;
//   }
// `;

const NumberAtOnceContentElementnow = styled.div`
  padding: 3px;
  font-size: 13px;
  color: #000018;
  margin-bottom: 5px;
  margin-top: 7px;
  font-weight: 600;
  position: relative; /* 요소의 위치 조정을 위해 추가 */
  top: -2px;
  right: 3px;
`;

const NumberAtOnceContentElement = styled.div`
  padding: 3px;
  font-size: 13px;
  color: #666666;
  margin-bottom: 5px;
  margin-left: 11px;
  font-weight: 500;
  &:hover {
    background-color: white;
    color: black;
    font-weight: 500;
  }
`;

const NumberAtOnce = ({ limit, setLimit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleChangeLimit = (newLimit) => {
    setLimit(newLimit);
    setIsOpen(false); // 드롭다운을 닫습니다.
  };

  // 현재 상태와 나머지 3개의 옵션을 항상 표시
  const options = [36, 72, 96]; // 항상 표시될 나머지 옵션들

  return (
    <NumberAtOnceContainer ref={ref}>
      <NumberAtOnceButton onClick={() => setIsOpen(!isOpen)}>
        {`${limit}개씩 보기`}
        <StyledArrowDown />
      </NumberAtOnceButton>
      <NumberAtOnceContent isOpen={isOpen}>
        {/* '현재 상태'를 맨 위에 별도로 표시 (클릭 이벤트 제거) */}
        <NumberAtOnceContentElementnow onClick={() => setIsOpen(false)}>
          {`${limit}개씩 보기 `}
          <StyledArrowDown2 />
        </NumberAtOnceContentElementnow>

        {/* 나머지 3개의 옵션을 항상 표시 */}
        {options.map((option) => (
          <NumberAtOnceContentElement
            key={option}
            onClick={() => handleChangeLimit(option)}
          >
            {`${option}개씩 보기`}
          </NumberAtOnceContentElement>
        ))}
      </NumberAtOnceContent>
    </NumberAtOnceContainer>
  );
};

export default NumberAtOnce;
