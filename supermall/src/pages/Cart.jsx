import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PaymentInfo from "./PaymentInfo";

const CartContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3%;
`;
const TableContainer = styled.div`
    width: 70%;
    height: 60vh;
`;

const SelectedDeleteBtn = styled.button`
    border: 1px solid #caccd5;
    padding: 5px 20px;
    background-color: transparent;
    margin-bottom: 20px;
    cursor: pointer;
`;

const Table = styled.table`
    table-layout: auto;
    width: 100%;
    border-top: 2px solid #caccd5;
    border-bottom: 2px solid #caccd5;
    margin: auto;
    border-spacing: 0px 20px;
    border-collapse: collapse;

    input[type="checkbox"] {
        accent-color: black;
        width: 17px;
        height: 17px;
        cursor: pointer;
    }
`;
const TheadRow = styled.tr`
    height: 60px;
    border-bottom: 2px solid #caccd5;

    button {
        margin: 10px;
    }
`;
const TBodyRow = styled.tr`
    height: 200px;
    border-bottom: 2px solid #caccd5;

    th {
        font-weight: normal;
    }

    input[type="text"] {
        width: 30px;
        height: 30px;
    }
`;

const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const BtnStyle = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
`;

const CountChangeBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 10px;
`;

const TFootRow = styled.tr`
    height: 100px;
    color: #a3a5a3;
`;

function Cart() {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        // const accessToken =
        //     "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYWNrZW5kMnRlYW0iLCJpYXQiOjE3MTA5OTgwODIsImV4cCI6MTcxMTYwMjg4MiwiZW1haWwiOiIxNzE3a3NvQG5hdmVyLmNvbSJ9.1YzAYa2F7V4Tif16ak1qYAek8X5Fg-40akK5SiklgF4";

        const accessToken = localStorage.getItem("accessToken");

        fetch("http://43.202.211.22:8080/api/cart-list", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <div>
            <h2>장바구니</h2>
            <CartContainer>
                <TableContainer>
                    <SelectedDeleteBtn>선택상품삭제</SelectedDeleteBtn>
                    <Table>
                        <thead>
                            <TheadRow>
                                <th>
                                    <input type="checkbox" />
                                </th>
                                <th>상품</th>
                                <th>수량</th>
                                <th>할인/혜택</th>
                                <th>배송비</th>
                                <th>주문금액</th>
                                <th>삭제</th>
                            </TheadRow>
                        </thead>
                        <tbody>
                            <TBodyRow>
                                <th>
                                    <input type="checkbox" />
                                </th>
                                <th>
                                    <ItemDetails>
                                        <h4>아이템이름</h4>
                                        <p>색상</p>
                                        <p>사이즈</p>
                                        <p>옵션 변경</p>
                                    </ItemDetails>
                                </th>
                                <th>
                                    <div>
                                        <BtnStyle>-</BtnStyle>
                                        <input type="text" />
                                        <BtnStyle>+</BtnStyle>
                                    </div>
                                    <CountChangeBtn>수량변경</CountChangeBtn>
                                </th>
                                <th>
                                    <p>0원</p>
                                </th>
                                <th>무료</th>
                                <th>100,000원</th>
                                <th>
                                    <BtnStyle>X</BtnStyle>
                                </th>
                            </TBodyRow>
                        </tbody>
                        <tfoot>
                            <TFootRow>
                                <td colSpan={7}>
                                    <p style={{ marginBottom: "5px" }}>
                                        -장바구니 저장 기간은 로그인 시 최대
                                        90일입니다.
                                    </p>
                                    <p>
                                        -예약상품은 발매 시 결제 순서대로
                                        출괴되며, 사정에 의하여 발매 연기 및
                                        취소가 될 수 있습니다.
                                    </p>
                                </td>
                            </TFootRow>
                        </tfoot>
                    </Table>
                </TableContainer>
                <PaymentInfo />
            </CartContainer>
        </div>
    );
}

// const handleDeleteCart = () => {

// 	fetch(`http://43.202.211.22:8080/api/cart-list/${cartItemId}`, {
// 	    method: "DELETE",
// 	  })
// 	  .then((res) => res.json())

// 	  // 화면에서 삭제된 상태로 보이도록 +

// }

export default Cart;
