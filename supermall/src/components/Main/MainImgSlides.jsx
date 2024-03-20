import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const ImgSlides = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
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
    bottom: 50%;
    left: 10%;
    color: white;
    font-size: 30px;
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

    return (
        <ImgSlides>
            <SlideContainer
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slideImgs.map((image, i) => (
                    <Slide key={i}>
                        <Image src={image.image} alt={`Slide ${i + 1}`} />
                        <TextOverlay>{slideText[i]}</TextOverlay>
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
