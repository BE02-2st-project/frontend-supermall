import React from "react";
import styled from "styled-components";

const ContainerTitle = styled.h1`
    width: 90%;
    max-width: ${(props) => (props.$short ? "1200px" : "100%")};
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-bottom: 3px solid black;
    margin: 0 auto;
    cursor: pointer;
`;

function PageMenu({ title, handleHeaderClick, short }) {
    return (
        <div onClick={handleHeaderClick}>
            <ContainerTitle $short={short}>{title}</ContainerTitle>
        </div>
    );
}

export default PageMenu;
