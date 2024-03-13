import React from 'react';
import styled from 'styled-components';

const SnsImgContainer = styled.div`
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

const SnsImages = styled.div`   
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

const SnsImageMoreBtn = styled.button`
    font-size: 15px;
    font-weight: bolder;
    color: white;
    background-color: black;
    border-radius: 10px;
    padding : 13px 63px;
    cursor: pointer;
    margin: 30px
`

const MainSns = () => {

    const imageData = ["https://media.istockphoto.com/id/1457122831/photo/portrait-of-hip-hop-group-on-staircase-outdoors.jpg?s=2048x2048&w=is&k=20&c=nQxQv1671GBNdLyojP9p018U_DKdxvDwhvVOBvDaW1Q=",   "https://media.istockphoto.com/id/1848126533/photo/fashionably-dressed-female-business-person-seen-on-the-street-of-new-york-talking-on-the.jpg?s=2048x2048&w=is&k=20&c=F-YauWWc_56ccR4KA8-qfW0hxrQwSw4P_EyFuZ9hfDM=",
    "https://media.istockphoto.com/id/1496292974/photo/happy-asian-chinese-young-woman-crossing-road-carrying-skateboard-in-old-town.jpg?s=2048x2048&w=is&k=20&c=hYKQOj3vIDA41oFmV0jh6ZV-8N9HmZfXUu58gdh2zdE=","https://media.istockphoto.com/id/1457122831/photo/portrait-of-hip-hop-group-on-staircase-outdoors.jpg?s=2048x2048&w=is&k=20&c=nQxQv1671GBNdLyojP9p018U_DKdxvDwhvVOBvDaW1Q="]

    return (
        <>
        <SnsImgContainer>
            <SnsHeader>
                <h2>SUPERMALL STYLE in SNS</h2>
                <SnsHeaderBtn>
                    <button>ALL</button>
                    <button>SUPERMALL</button>
                    <button>KIDS🐻</button>
                </SnsHeaderBtn>
            </SnsHeader>
            <SnsImages>
                    {imageData.map((imageData, index) => (
                        <SnsImage key={index} src={imageData} alt={`Image ${index + 1}`} />
                    ))}
                </SnsImages>
        {/* <SnsImageMoreBtn>더보기</SnsImageMoreBtn> */}
        </SnsImgContainer>
       
        </>
    );
};

export default MainSns;