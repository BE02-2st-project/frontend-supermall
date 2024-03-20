import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NumberAtOnce from "./NumberAtOnce";
import ProductFilter from "./ProductFilter";
import Card from "../components/Product/Card";
import Pagination from "../common/Pagination";

const ProductsBackground = styled.div`
  width: 1720px;
  height: 100vh;
  background-color: #ffffff;
  margin: 0 92px 0 92px;
  border-top: 2px solid #000000;
`;

const UpperMenuBar = styled.div`
  width: 1720px;
  height: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ProductLeftMenuBar = styled.div`
  width: 430px;
  height: 30px;
  display: flex;
  flex-direction: row;
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
`;

////////////////////////// 밑에부터 아이템리스트

const ProductsList = styled.div`
  width: 1720px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid #dddddd;
`;

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

function Products() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(36);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

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
        <StyledMain>
          {posts.slice(offset, offset + limit).map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </StyledMain>
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
