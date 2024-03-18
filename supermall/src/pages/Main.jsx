import React from "react";
import MainImgSlides from "../components/Main/MainImgSlides";
import MainSns from "../components/Main/MainSns";
import MainProducts from "../components/Main/MainProducts";
import styled from "styled-components";



const MainContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const Main = () => {
    return (
    <MainContainer>
        <MainImgSlides/>
        <MainSns/>
        <MainProducts/>
    </MainContainer>
    );
}

export default Main;



