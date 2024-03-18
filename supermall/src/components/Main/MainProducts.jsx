import { useState, useEffect } from "react";
import styled from "styled-components";


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
</ProductContainer>
    )
}

export default MainProducts;



