import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const DetailImageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* border-bottom: 1px solid #dddddd; */
`;

const RepresentImage = styled.div`
    img {
        width: 800px;
        height: 800px;
    }
`;

/* ============================ */
const SliderWrapper = styled.div`
    width: 600px;
    box-sizing: border-box;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .slick-slider.slick-initialized {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slick-list {
        width: 500px;
        display: flex;
        justify-content: center;
        height: 100px;
    }
    //모든 자식 요소를 담고 있는 가로로 기다란 트랙(숨겨진 부분 존재)
    .slick-track {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
    }
    //각 요소들
    .slick-slide {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    //다음 화살표
    .slick-next,
    .slick-prev {
        width: 45px;
        height: 45px;
        color: #666;
    }
`;

const SliderImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    /* border: 1px solid #ddd; */
`;

function DetailImages({ itemInfo }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        draggable: true,
        arrows: true,
        vertical: false,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
    };

    const [representImg, setRepresentImg] = useState(
        itemInfo.imgURLs[0].imageURL
    );

    const handleChangeImg = (imgUrl) => {
        setRepresentImg(imgUrl);
    };

    return (
        <DetailImageBox>
            <RepresentImage>
                <img src={representImg} />
            </RepresentImage>

            <SliderWrapper>
                <Slider {...settings}>
                    {itemInfo.imgURLs.length !== 1 &&
                        itemInfo.imgURLs.map((url, index) => (
                            <div
                                key={index}
                                onClick={() => handleChangeImg(url.imageURL)}
                            >
                                <SliderImage src={url.imageURL} />
                            </div>
                        ))}
                </Slider>
            </SliderWrapper>
        </DetailImageBox>
    );
}

export default DetailImages;
