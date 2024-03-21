import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const ImgSlides = styled.div`
    /* position: relative; */
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    font-family: "Gill Sans", sans-serif;
`;

const SlideContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease;
`;

const Slide = styled.div`
    position: relative;
    min-width: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 674px;
    object-fit: cover;
`;

const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: white;
    font-size: 70px;
    cursor: pointer;
    z-index: 1;
`;

const LeftButton = styled(Button)`
    left: 10px;
`;

const RightButton = styled(Button)`
    right: 10px;
`;

const TextOverlay = styled.div`
    position: absolute;
    bottom: 32%;
    left: 10%;
    color: ${(props) => props.$contentColor};
    font-size: 30px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div:nth-child(1) {
        font-size: 4rem;
        font-weight: 400;
    }

    div:nth-child(2) {
        font-size: 4.5rem;
        font-weight: 640;
    }

    div:nth-child(3) {
        font-size: 1.2rem;
        padding-top: 1.5rem;
    }
`;

const MainImgSlides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideText, setSlideText] = useState([
        "sample text",
        "sample text1",
        "sample text2",
    ]);
    const [slideImgs, setSlideImgs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/ines012/supermall-data/main/sampleImg1.json"
        )
            .then((response) => response.json())
            .then((data) => setSlideImgs(data));
    }, []);

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slideImgs.length - 1 ? 0 : currentSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? slideImgs.length - 1 : currentSlide - 1
        );
    };

    const slideImages = [
        {
            url: "https://static-resource.mlb-korea.com/images/display/category/MTP/A01/A01/contents/10111_1045_305_KOR_20240229101552.jpg/dims/resize/1920x768",
            text1: "MLB 서울 시리즈",
            text2: "Relay Drop Open",
            text3: "MLB 월드투어 기념 컬렉션 보러가기",
            color: "black",
        },
        {
            url: "https://static-resource.mlb-korea.com/images/display/category/MTP/A01/A01/contents/10111_1045_312_KOR_20240313163936.jpg/dims/resize/1920x768",
            text1: "Athletic Life Style",
            text2: "스포티브 바람막이",
            text3: "#MLB아우터 #바람막이 #윈드브레이커",
            color: "white",
        },
        {
            url: "https://static-resource.mlb-korea.com/images/display/category/MTP/A01/A01/contents/10111_1045_310_KOR_20240311103124.jpg/dims/resize/1920x768",
            text1: "Spring New Edition",
            text2: "MLB DENIM",
            text3: "#MLB데님 #데님자켓 #데님팬츠 #데님볼캡",
            color: "white",
        },
        {
            url: "https://static-resource.mlb-korea.com/images/display/category/MTP/A01/A01/contents/10111_1045_309_KOR_20240306185534.jpg/dims/resize/1920x768",
            text1: "TIME TO GO-OUT",
            text2: "KIDS HIP-OUTDOOR",
            text3: "#MLB키즈 #키즈바람막이 #고프코어 #바람막이",
            color: "black",
        },
        {
            url: "https://static-resource.mlb-korea.com/images/display/category/MTP/A01/A01/contents/10111_1045_307_KOR_20240229165326.jpg/dims/resize/1920x768",
            text1: "Play With My Bestie",
            text2: "KIDS VARSITY",
            text3: "#MLB키즈 #키즈바시티 #MLB키즈바시티자켓 #MLB키즈셋업",
            color: "black",
        },
        {
            url: "https://static-resource.mlb-korea.com/images/display/category/MTP/A01/A01/contents/10111_1045_311_KOR_20240312172012.jpg/dims/resize/1920x768",
            text1: "Premium Lifestyle",
            text2: "KIDS FASTBALL",
            text3: "#MLB키즈 #패스트볼 #키즈패스트볼",
            color: "black",
        },
    ];

    return (
        <ImgSlides>
            <SlideContainer
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slideImages.map((content, i) => (
                    <Slide key={i}>
                        <Image src={content.url} alt={`Slide ${i + 1}`} />

                        <TextOverlay $contentColor={content.color}>
                            <div>{content.text1}</div>
                            <div>{content.text2}</div>
                            <div>{content.text3}</div>
                        </TextOverlay>

                        <LeftButton onClick={prevSlide}>
                            <GrPrevious />
                        </LeftButton>
                        <RightButton onClick={nextSlide}>
                            <GrNext />
                        </RightButton>
                    </Slide>
                ))}
            </SlideContainer>
        </ImgSlides>
    );
};

export default MainImgSlides;
