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

    const productData = ["https://media.istockphoto.com/id/1457122831/photo/portrait-of-hip-hop-group-on-staircase-outdoors.jpg?s=2048x2048&w=is&k=20&c=nQxQv1671GBNdLyojP9p018U_DKdxvDwhvVOBvDaW1Q=",   "https://media.istockphoto.com/id/1848126533/photo/fashionably-dressed-female-business-person-seen-on-the-street-of-new-york-talking-on-the.jpg?s=2048x2048&w=is&k=20&c=F-YauWWc_56ccR4KA8-qfW0hxrQwSw4P_EyFuZ9hfDM=",
    "https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=2048x2048&w=is&k=20&c=hYKQOj3vIDA41oFmV0jh6ZV-8N9HmZfXUu58gdh2zdE=","https://media.istockphoto.com/id/1457122831/photo/portrait-of-hip-hop-group-on-staircase-outdoors.jpg?s=2048x2048&w=is&k=20&c=nQxQv1671GBNdLyojP9p018U_DKdxvDwhvVOBvDaW1Q="]

    return(
<ProductContainer>
    <ProductImages>
                    {productData.map((productData, index) => (
                        <ProductImage key={index} src={productData} alt={`Image ${index + 1}`} />
                    ))}
    </ProductImages>
</ProductContainer>
    )
}

export default MainProducts;



