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
    margin: 2rem 8rem 5rem 8rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

const StyledMain = styled.main`
    @media screen and (min-width: 1080px) {
        width: 20%; /* 화면 너비가 1080px 이상일 때 */
    }
    @media screen and (max-width: 1080px) {
        width: 33%; /* 화면 너비가 768px 이하일 때 */
    }
    @media screen and (max-width: 500px) {
        width: 50%; /* 화면 너비가 768px 이하일 때 */
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

    return (
        <>
            <MainImgSlides />
            <MainPageContainer>
                <MainSns />

                {posts && (
                    <MainCardContainer>
                        {posts.slice(0, 10).map((post) => (
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
