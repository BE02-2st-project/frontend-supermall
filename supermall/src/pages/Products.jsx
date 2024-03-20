import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NumberAtOnce from "./NumberAtOnce";
import ProductFilter from "./ProductFilter";
import Card from "../components/Product/Card";
import Pagination from "../common/Pagination";

const ProductsBackground = styled.div`
    width: 95%;
    margin: 0 auto;
    background-color: #ffffff;
    border-top: 2px solid #000000;
`;

const UpperMenuBar = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProductLeftMenuBar = styled.div`
    width: 430px;
    height: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
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

const NumberAtOnceStyle = styled.div`
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

////////////////////////// 밑에부터 아이템리스트

const ProductsList = styled.div`
    margin: 0 auto;
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

function Products() {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(36);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetch("http://43.202.211.22:8080/api/items")
            .then((res) => {
                console.log(res);
                // res.json();
            })
            .then((data) => setPosts(data));
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

            <ProductsList>
                {posts.slice(offset, offset + limit).map((post) => (
                    <StyledMain>
                        <Card
                            key={post.id}
                            name={post.name}
                            price={post.price}
                            imgURL={post.imgURL}
                        />
                    </StyledMain>
                ))}
            </ProductsList>
            <Pagination
                total={posts.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </ProductsBackground>
    );
}

export default Products;
