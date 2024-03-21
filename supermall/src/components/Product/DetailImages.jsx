import React from "react";
import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const DetailImageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* border-bottom: 1px solid #dddddd; */
`;

const RepresentImage = styled.div`
    img {
        width: 800px;
        height: 800px;
    }
`;

const ProductDetailPhotos = styled.div`
    width: 800px;
    display: flex;
    overflow: scroll;
    justify-content: center;
    align-items: center;
    img {
        width: 300px;
    }
`;

function DetailImages({ itemInfo }) {
    return (
        <DetailImageBox>
            <RepresentImage>
                <img src={itemInfo.imgURLs[0].imageURL} />
            </RepresentImage>
            <ProductDetailPhotos>
                {itemInfo.imgURLs.length !== 1 &&
                    itemInfo.imgURLs.map((url, index) => (
                        <div key={index}>
                            <img src={url.imageURL} />
                        </div>
                    ))}
            </ProductDetailPhotos>
        </DetailImageBox>
    );
}

export default DetailImages;
