import React from "react";
import styled from "styled-components";
const ContainerTitle = styled.h1`
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-bottom: 3px solid black;
    margin: 0 2rem;
`;
function PageMenu({ title }) {
    return <ContainerTitle>{title}</ContainerTitle>;
}

export default PageMenu;
