import React, { useState, useEffect } from "react";
import MainImgSlides from "../components/Main/MainImgSlides";
import MainSns from "../components/Main/MainSns";
import styled from "styled-components";
import Card from "../components/Product/Card";

const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const MainCardContainer = styled.div`
    margin: 2rem 3rem 5rem 3rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

const StyledMain = styled.main`
    width: 300px;
    @media screen and (min-width: 1080px) {
        width: 350px; /* 화면 너비가 1080px 이상일 때 */
    }
    @media screen and (max-width: 500) {
        width: 250px; /* 화면 너비가 768px 이하일 때 */
    }

    margin-bottom: 1rem;
`;

const Main = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://43.202.211.22:8080/api/items", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    console.log(posts);

    console.log(localStorage.getItem("accessToken"));

    return (
        <>
            <MainImgSlides />
            <MainPageContainer>
                <MainSns />

                {posts && (
                    <MainCardContainer>
                        {posts?.slice(0, 8).map((post) => (
                            <StyledMain key={post.id}>
                                <Card key={post.id} itemInfo={post} />
                            </StyledMain>
                        ))}
                    </MainCardContainer>
                )}
            </MainPageContainer>
        </>
    );
};

export default Main;
