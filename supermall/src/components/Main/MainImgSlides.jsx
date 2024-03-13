import React, { useState } from 'react';
import styled from 'styled-components';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

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

const ImageLink = styled.a`
    text-decoration: none;
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
    const [slideText, setSlideText] = useState('sample text')

    const images = [
        "https://media.istockphoto.com/id/1457122831/photo/portrait-of-hip-hop-group-on-staircase-outdoors.jpg?s=2048x2048&w=is&k=20&c=nQxQv1671GBNdLyojP9p018U_DKdxvDwhvVOBvDaW1Q=",
        "https://media.istockphoto.com/id/1848126533/photo/fashionably-dressed-female-business-person-seen-on-the-street-of-new-york-talking-on-the.jpg?s=2048x2048&w=is&k=20&c=F-YauWWc_56ccR4KA8-qfW0hxrQwSw4P_EyFuZ9hfDM=",
        "https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=2048x2048&w=is&k=20&c=hYKQOj3vIDA41oFmV0jh6ZV-8N9HmZfXUu58gdh2zdE="
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    return (
        <ImgSlides>
            <SlideContainer style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <Slide key={index}>
                        <ImageLink href="">
                        <Image src={image} alt={`Slide ${index + 1}`} />
                        </ImageLink>
                        <TextOverlay>{slideText}</TextOverlay>
                        <LeftButton onClick={prevSlide}><GrPrevious /></LeftButton>
                        <RightButton onClick={nextSlide}><GrNext /></RightButton>
                    </Slide>
                ))}
                
            </SlideContainer>
        </ImgSlides>
    );
};

export default MainImgSlides;
