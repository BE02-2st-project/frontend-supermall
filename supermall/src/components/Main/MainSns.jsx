import React, { useState , useEffect} from 'react';
import styled from 'styled-components';


const SnsImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
    padding: 20px;

    @media (max-width: 768px) {
        width: 80%; /* Adjust width for smaller screens */
    }
`;

const SnsHeader = styled.div`
    display: flex;
    align-items : center;
    justify-content: space-between
`

const SnsHeaderBtn = styled.div`
    display: flex;
    align-items : center;
    justify-content: space-between;
    
    button {
        border-radius: 30px;
        background-color: transparent;
        border: 1px solid black; 
        padding: 8px 16px;
        color: black;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-left: 15px;
    }

    button:nth-child(3){
        border: 1px solid #d28f8a;
    }

    button:hover {
        background-color: black;
        color: white
    }

    button:nth-child(3):hover {
        background-color: #d28f8a;
    }
`
const SnsImageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 250px);
    grid-template-rows: repeat(2, 250px); 
    grid-gap: 20px;
`;

const SnsImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;


const SnsImageMoreBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

const SnsImageMoreBtn = styled.button`
    font-size: 15px;
    font-weight: bolder;
    color: white;
    background-color: black;
    border-radius: 10px;
    padding: 13px 63px;
    cursor: pointer;
`;

const MainSns = () => {
    const [snsImgs, setSnsImgs] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ines012/supermall-data/main/sampleImg1.json")
            .then((response) => response.json())
            .then((data) => setSnsImgs(data))
    }, []);

const loadMoreImages = () => {
        fetch("https://raw.githubusercontent.com/ines012/supermall-data/main/sampleImg2.json")
            .then((response) => response.json())
            .then((data) =>setSnsImgs((prevImgs) => [...prevImgs, ...data]));
            
};

return (
    <SnsImgContainer>
        <SnsHeader>
            <h2>SUPERMALL STYLE in SNS</h2>
            <SnsHeaderBtn>
                <button>ALL</button>
                <button>SUPERMALL</button>
                <button>KIDS🐻</button>
            </SnsHeaderBtn>
        </SnsHeader>
        <SnsImageWrapper>
                {snsImgs.map((imageData, i) => (
                    <SnsImage key={i} src={imageData.image} alt={`Image ${i + 1}`} />
                ))}
        </SnsImageWrapper>

            <SnsImageMoreBtnContainer>
                <SnsImageMoreBtn onClick={loadMoreImages}>더보기</SnsImageMoreBtn>
            </SnsImageMoreBtnContainer>
           
    </SnsImgContainer>
);
};

export default MainSns;