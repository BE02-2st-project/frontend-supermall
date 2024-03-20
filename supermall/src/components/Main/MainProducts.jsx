import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Product/Card";

const ProductImages = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: repeat(2, 300px);
    grid-gap: 1.5rem;
`;

const ProductImage = styled.div`
    width: 300px;
    height: 300px;
`;

const MainProducts = () => {
    const [mainProductImgs, setMainProductImgs] = useState([]);

    // 함수 따로 만들어서 비동기처리하기!???
    useEffect(() => {
        fetch("http://43.202.211.22:8080/api/items")
            .then((res) => res.json())
            .then((data) => setMainProductImgs(data));
    }, []);

    return (
        <div>
            <ProductImages>
                {mainProductImgs.slice(10).map((card, i) => (
                    <ProductImage>
                        <Card
                            key={card.id}
                            name={card.name}
                            price={card.price}
                            imgURL={card.imgURL}
                        />
                    </ProductImage>
                ))}
            </ProductImages>
        </div>
    );
};

export default MainProducts;
