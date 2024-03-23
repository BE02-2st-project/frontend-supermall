import React from "react";
import { Range } from "react-range";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledRange = styled.div`
  flex: 1;
  margin-right: 60px;

  position: relative;
  margin-right: 50px;
  width: 100%;
  height: 4px;
  background: #dddddd;

  .ui-slider-handle {
    position: absolute;
    top: -8px;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    background: white;
    color: white;
    border-radius: 50%;
    border: 1px solid black;
    outline: 1px solid black;
  }

  .ui-slider-range {
    position: absolute;
    height: 4px;
    background: #000000;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  width: 100px;
  height: 40px;
  margin: 0 5px;
  text-align: center;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

function TwoThumbsRangeSlider({ priceRange }) {
  const [values, setValues] = React.useState([0, 100]);

  return (
    <SliderContainer>
      <StyledRange>
        <Range
          step={1}
          min={0}
          max={100}
          values={values}
          onChange={setValues}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                backgroundColor: "#ccc",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                backgroundColor: "#999",
                borderRadius: "50%",
                border: "1px solid black",
              }}
            />
          )}
        />
      </StyledRange>
      <InputsContainer>
        <StyledInput
          type="number"
          value={values[0]}
          onChange={(e) => {
            const newValue = Math.max(
              0,
              Math.min(Number(e.target.value), values[1])
            );
            setValues([newValue, values[1]]);
          }}
        />
        만원 ~
        <StyledInput
          type="number"
          value={values[1]}
          onChange={(e) => {
            const newValue = Math.min(
              100,
              Math.max(Number(e.target.value), values[0])
            );
            setValues([values[0], newValue]);
          }}
        />
        만원
      </InputsContainer>
    </SliderContainer>
  );
}

export default TwoThumbsRangeSlider;
