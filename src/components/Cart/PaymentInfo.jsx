import styled from "styled-components";

const PaymentInfoContainer = styled.div`
    width: 400px;
    border: 2px solid black;
    padding: 15px 15px;
    block-size: fit-content;

    div {
        display: flex;
        justify-content: space-between;
    }

    button {
        width: 100%;
        background-color: black;
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 10px;
        font-weight: bolder;
        margin-top: 15px;
        cursor: pointer;
    }
`;
const PaymentInfoHeader = styled.div`
    border-bottom: 1px solid #666;
    padding-bottom: 20px;
`;

const PaymentInfoBody = styled.div`
    border-bottom: 1px solid #666;
    padding-top: 20px;
    display: flex;
    flex-direction: column;

    div {
        margin-bottom: 20px;
    }

    p {
        display: inline;
    }
`;

const PaymentInfoTotal = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;

    p {
        display: inline;
    }
`;

const OrderButton = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    padding: 0.8rem 0;
    border-radius: 5px;
    margin-bottom: 1rem;
`;

function PaymentInfo({ totalPrice, handleClickOrder }) {
    return (
        <PaymentInfoContainer>
            <PaymentInfoHeader>
                <h2>결제정보</h2>
            </PaymentInfoHeader>
            <PaymentInfoBody>
                <div>
                    <p>상품금액</p>
                    <p>{totalPrice?.toLocaleString()}원</p>
                </div>
                <div>
                    <p>할인 금액</p>
                    <p>0원</p>
                </div>
                <div>
                    <p>배송비</p>
                    <p>무료</p>
                </div>
            </PaymentInfoBody>
            <PaymentInfoTotal>
                <p>총 주문금액</p>
                <p>{totalPrice?.toLocaleString()}원</p>
            </PaymentInfoTotal>
            <div>
                <OrderButton onClick={handleClickOrder}>주문하기</OrderButton>
            </div>
        </PaymentInfoContainer>
    );
}

export default PaymentInfo;
