import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItem } from "../../redux/cartSlice";


const ProductContainer = styled.div`

`;

const ProductImages = styled.div`   
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: repeat(2, 300px); 
    grid-gap: 20px;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;


const MainProducts = ()=>{

    const dispatch= useDispatch();

    const [mainProductImgs, setMainProductImgs] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ines012/supermall-data/main/sampleImg1.json")
            .then((response) => response.json())
            .then((data) => setMainProductImgs(data))
    }, []);


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

export default MainProducts;



