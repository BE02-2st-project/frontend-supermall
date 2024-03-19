import styled from "styled-components"


function PaymentInfo(){

    const PaymentInfoContainer = styled.div`
        width: 20vw;
        height: 24vw;
        border: 3px solid black;
        padding: 15px 15px;

        button{
            width: 100%;
            background-color: black;
            color: white;
            padding-top: 10px;
            padding-bottom: 10px;
            border-radius: 10px;
            font-weight: bolder;
            margin-top: 15px;
        }
    `
    const PaymentInfoHeader = styled.div`
        border-bottom: 2px solid #caccd5;
        padding-bottom : 20px;
    `
    const PaymentInfoBody = styled.div`
    border-bottom: 2px solid #caccd5;
    padding-top: 20px;
    display: flex;
    flex-direction: column;

    div{
        margin-bottom : 20px;
    }

    p{
        display: inline;
    }
    

    `
    const PaymentInfoTotal = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    
    p{
        display: inline;
    }
    `

    return(
<PaymentInfoContainer>
    <PaymentInfoHeader>
        <h2>결제정보</h2>
    </PaymentInfoHeader>
    <PaymentInfoBody>
        <div>
            <p>상품금액</p>
            <p>100,000원</p>
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
            <p>100,000원</p>
    </PaymentInfoTotal>
    <button>주문하기</button>
</PaymentInfoContainer>

    )
}

export default PaymentInfo