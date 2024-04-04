import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NumberAtOnce from "./NumberAtOnce";
import ProductFilter from "../components/Product/ProductFilter";
import Card from "../components/Product/Card";
import Pagination from "../common/Pagination";
import { useParams } from "react-router-dom";

const ProductsBackground = styled.div`
    width: 95%;
    margin: 0 auto;
    border-top: 2px solid #000000;
`;

const UpperMenuBar = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProductLeftMenuBar = styled.div`
    width: 430px;
    height: 30px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
`;

const CategoryButton = styled.button`
    height: 20px;
    padding: 0px 10px;
    font-size: 13px;
    white-space: nowrap;
    letter-spacing: -1px;
    background-color: #ffffff;
    color: #666b70;
    font-weight: bold;
    outline: 0;
    border: none;
    padding-inline: 0px;
    &:hover {
        cursor: pointer;
        color: black;
        text-decoration: underline;
    }
`;

const SeperateLine = styled.div`
    width: 0;
    height: 12px;
    margin: 0 20px 0 20px;
    border: 1px solid #ebebeb;
`;

const ProductRightMenuBar = styled.div`
    width: 320px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

////////////////////////// 밑에부터 아이템리스트

const ItemListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

const MainCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

const StyledMain = styled.main`
    @media screen and (min-width: 1080px) {
        width: 430px; /* 화면 너비가 1080px 이상일 때 */
    }
    @media screen and (max-width: 1080px) {
        width: 300px; /* 화면 너비가 768px 이하일 때 */
    }
    @media screen and (max-width: 768px) {
        width: 300px; /* 화면 너비가 768px 이하일 때 */
    }
    @media screen and (max-width: 400px) {
        width: 200px; /* 화면 너비가 768px 이하일 때 */
    }
    margin-bottom: 1rem;
`;

function Products() {
    const { category } = useParams();
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(36);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetch("http://43.202.211.22:8080/api/items")
            .then((res) => res.json())
            .then((data) => setPosts(data));

        // 카테고리 거르기
        setPosts((prev) =>
            prev.filter((item) => item.category.category === category)
        );
    }, []);

    console.log(posts);

    return (
        <ProductsBackground>
            <UpperMenuBar>
                <ProductLeftMenuBar>
                    <ProductLeftMenuBar>
                        <CategoryButton>신상품순</CategoryButton>
                        <SeperateLine />
                        <CategoryButton>판매순</CategoryButton>
                        <SeperateLine />
                        <CategoryButton>높은가격순</CategoryButton>
                        <SeperateLine />
                        <CategoryButton>낮은가격순</CategoryButton>
                    </ProductLeftMenuBar>
                </ProductLeftMenuBar>
                <ProductRightMenuBar>
                    <NumberAtOnce limit={limit} setLimit={setLimit} />
                    <ProductFilter />
                </ProductRightMenuBar>
            </UpperMenuBar>

            <ItemListContainer>
                {posts && (
                    <MainCardContainer>
                        {posts.map((post) => (
                            <StyledMain key={post.id}>
                                <Card
                                    key={post.id}
                                    itemInfo={post}
                                    category={category}
                                />
                            </StyledMain>
                        ))}
                    </MainCardContainer>
                )}
            </ItemListContainer>

            <Pagination
                // total={posts.length}
                total={10}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </ProductsBackground>
    );
}

export default Products;
