import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
<<<<<<< HEAD
import { addItem } from "../../redux/cartSlice";
=======
import Card from "../Product/Card";
>>>>>>> develop

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

<<<<<<< HEAD

const MainProducts = ()=>{

    const dispatch= useDispatch();

=======
const MainProducts = () => {
>>>>>>> develop
    const [mainProductImgs, setMainProductImgs] = useState([]);

    // 함수 따로 만들어서 비동기처리하기!???
    useEffect(() => {
        fetch("http://43.202.211.22:8080/api/items")
            .then((res) => res.json())
            .then((data) => setMainProductImgs(data));
    }, []);

<<<<<<< HEAD

    return(
<ProductContainer>
    <ProductImages>
                    {mainProductImgs.map((productData, i) => (
                        <ProductImage key={i} src={productData.image} alt={`Image ${i+1}`} />
                    ))}
    </ProductImages>

    <button onClick={()=>{
    dispatch(addItem({id: 1 , image: "https://media.istockphoto.com/id/118358120/photo/red-baseball-cap.jpg?s=2048x2048&w=is&k=20&c=D__s6a7tynPVAfzQ7_6Zuj96-T7bbjB03w14mkHzh9g=",title: "cap", price: "55,000원"}))
}}>주문하기</button>

</ProductContainer>


    )
}
=======
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
>>>>>>> develop

export default MainProducts;
