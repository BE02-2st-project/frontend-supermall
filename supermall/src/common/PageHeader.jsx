import React from "react";
import styled from "styled-components";

const ContainerTitle = styled.h1`
    width: 90%;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-bottom: 3px solid black;
    margin: 0 auto;
    cursor: pointer;
`;

function PageMenu({ title, handleHeaderClick }) {
    return (
        <div onClick={handleHeaderClick}>
            <ContainerTitle>{title}</ContainerTitle>
        </div>
    );
}

export default PageMenu;
