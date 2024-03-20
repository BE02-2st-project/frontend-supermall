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
    margin: 0 8rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #dddddd;
`;

const StyledMain = styled.main`
    @media screen and (min-width: 1080px) {
        width: 25%; /* 화면 너비가 1080px 이상일 때 */
    }
    @media screen and (max-width: 1080px) {
        width: 50%; /* 화면 너비가 768px 이하일 때 */
    }
    @media screen and (max-width: 500px) {
        width: 100%; /* 화면 너비가 768px 이하일 때 */
    }
    margin-bottom: 1rem;
`;

const Main = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://43.202.211.22:8080/api/cart", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
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

                <MainCardContainer>
                    {posts.slice(0, 10).map((post) => (
                        <StyledMain>
                            <Card
                                key={post.id}
                                name={post.name}
                                price={post.price}
                                imgURL={post.imgURL}
                            />
                        </StyledMain>
                    ))}
                </MainCardContainer>
            </MainPageContainer>
        </>
    );
};

export default Main;
