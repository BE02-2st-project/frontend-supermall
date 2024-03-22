import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import { useNavigate } from "react-router-dom";
import PaymentInfo from "../components/Cart/PaymentInfo";

const CartContainer = styled.div`
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    gap: 1.5rem;

    @media screen and (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const TableContainer = styled.div`
    width: 100%;
`;

const TableContainerHeader = styled.div`
    padding: 1rem 0rem;
`;

const Table = styled.table`
    text-align: center;
    vertical-align: center;
    table-layout: auto;
    width: 100%;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
    border-spacing: 0px 20px;
    border-collapse: collapse;
    font-size: 0.9rem;
    th {
        border-bottom: 1px solid #666;
        padding: 1rem 0.5rem;
        font-weight: 400;
    }

    tr {
        border-bottom: 1px solid #ddd;
        cursor: pointer;
    }

    tr:hover {
        background-color: #ededed;
    }

    td:nth-child(3),
    td:nth-child(5) {
        font-weight: bold;
    }
`;

const ItemDetails = styled.td`
    display: flex;
    margin-left: 20px;
    align-items: center;

    img {
        width: 150px;
        height: 150px;
    }
`;

const ItemDescription = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    > p {
        font-weight: bold;
    }
    > div {
        margin-top: 2rem;
    }

    > div > p {
        color: #666;
        font-size: 0.8rem;
    }
`;

const PaymentInfoStyle = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 1.2rem;
    border: 2px solid black;

    h2 {
        border-bottom: 1px solid #666;
        padding: 1rem 0;
    }

    @media screen and (max-width: 1100px) {
        width: 70%;
    }
`;

const ColumnPayInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
`;

const RowPayInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #666;
`;

const BlackRowPayInfo = styled(RowPayInfo)`
    color: black;
`;

const CheckAgreeBox = styled.div`
    font-size: 0.8rem;
    color: #666;
    input {
        cursor: pointer;
        accent-color: black;
        margin-right: 0.5rem;
    }
    label {
        cursor: pointer;
    }
`;

const TotalPayResult = styled(RowPayInfo)`
    border-top: 1px solid #666;
    padding-top: 1.5rem;
    div:nth-child(1) {
        color: black;
        font-weight: bold;
    }
    div:nth-child(2) {
        color: #ff3600;
        span {
            font-size: 1.2rem;
            font-weight: bold;
        }
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

const CancelButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`;

const CancelButton = styled(OrderButton)`
    width: 300px;
    cursor: pointer;
`;

function Order() {
    const navigate = useNavigate();
    const [orderItems, setOrderItems] = useState([]);
    const [ableCancel, setAbleCancel] = useState(true);
    const [currentOrderId, setCurrentOrderId] = useState(0);

    /* 주문 목록 받아오기 (가장 최신것만)*/
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        fetch("http://43.202.211.22:8080/api/order-list", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrderItems(data);
                setCurrentOrderId(data[0]?.orderId);
            });

        setAbleCancel(orderItems.length === 0 ? false : true);
    }, [currentOrderId]);

    console.log(orderItems);
    console.log(currentOrderId);

    /* 주문 목록 취소하기 (가장 최신것만) */
    const handleCancelOrder = (orderId) => {
        const accessToken = localStorage.getItem("accessToken");
        fetch(`http://43.202.211.22:8080/api/order-list/${orderId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrderItems(data);
            });
    };
    return (
        <div>
            <PageHeader
                title="주문/결제"
                short={true}
                handleHeaderClick={() => navigate("/mypage")}
            ></PageHeader>
            <MyPageMenu order={2} />

            <CartContainer>
                <TableContainer>
                    <div>
                        <TableContainerHeader>상품 정보</TableContainerHeader>
                        <Table>
                            <thead>
                                <tr>
                                    <th>상품</th>
                                    <th>수량</th>
                                    <th>할인/혜택</th>
                                    <th>배송비</th>
                                    <th>주문금액</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* 주문 목록 */}
                                {orderItems &&
                                    orderItems[0]?.orderItemResponseDtoList.map(
                                        (order, index) => (
                                            <tr key={index}>
                                                <ItemDetails>
                                                    <div>
                                                        <img
                                                            src={order.imgUrl}
                                                            alt="주문상품 이미지"
                                                        />
                                                    </div>
                                                    <ItemDescription>
                                                        <p>{order.itemName}</p>
                                                        <div>
                                                            <p>색상: MGL</p>
                                                            <p>사이즈: XS</p>
                                                        </div>
                                                    </ItemDescription>
                                                </ItemDetails>
                                                <td>{order.count}</td>
                                                <td>
                                                    {order.price.toLocaleString()}
                                                    원
                                                </td>
                                                <td>무료</td>
                                                <td>
                                                    {order.totalPrice.toLocaleString()}
                                                    원
                                                </td>
                                            </tr>
                                        )
                                    )}
                            </tbody>
                        </Table>
                        <CancelButtonBox>
                            <CancelButton
                                onClick={() =>
                                    handleCancelOrder(currentOrderId)
                                }
                                disabled={ableCancel}
                            >
                                주문 취소하기
                            </CancelButton>
                        </CancelButtonBox>
                    </div>
                </TableContainer>

                <PaymentInfoStyle>
                    <h2>결제정보</h2>
                    <ColumnPayInfo>
                        <BlackRowPayInfo>
                            <div>총 상품금액</div>
                            <div>100,000원</div>
                        </BlackRowPayInfo>
                        <RowPayInfo>
                            <div>상품 할인 금액</div>
                            <div>-0원</div>
                        </RowPayInfo>
                        <RowPayInfo>
                            <div>포인트 사용</div>
                            <div>-0원</div>
                        </RowPayInfo>
                        <BlackRowPayInfo>
                            <div>배송비</div>
                            <div>+0원</div>
                        </BlackRowPayInfo>
                    </ColumnPayInfo>

                    <ColumnPayInfo>
                        <TotalPayResult>
                            <div>총 결제금액</div>
                            <div>
                                <span>301,000</span>원
                            </div>
                        </TotalPayResult>
                        <BlackRowPayInfo>
                            <div>적립 예정 마일리지</div>
                            <div>3,010원</div>
                        </BlackRowPayInfo>
                    </ColumnPayInfo>

                    <CheckAgreeBox>
                        <input type="checkbox" id="agreePay" />
                        <label htmlFor="agreePay">
                            주문하실 상품, 가격, 배송정보, 할인정보 등을
                            확인하였으며, 구매에 동의하시겠습니까? (전자상거래법
                            제 8조 제 2항)
                        </label>
                    </CheckAgreeBox>
                    <div>
                        <OrderButton type="button">결제하기</OrderButton>
                    </div>
                </PaymentInfoStyle>
            </CartContainer>
        </div>
    );
}

export default Order;
