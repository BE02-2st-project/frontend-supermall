import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PaymentInfo from "../components/Cart/PaymentInfo";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/cartSlice";
import PageHeader from "../common/PageHeader";
import MyPageMenu from "../common/MyPageMenu";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

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
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SelectedDeleteBtn = styled.div`
    width: 8rem;
    border: 1px solid #caccd5;
    padding: 0.5rem 1rem;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: black;
        color: white;
    }
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
        border-bottom: 1px solid #999;
        padding: 1rem 0.5rem;
        font-weight: 400;
    }
    td {
        padding: 0 0.2rem;
    }

    tr {
        border-bottom: 1px solid #ddd;
        cursor: pointer;
    }

    tr:hover {
        background-color: #ededed;
    }

    td:nth-child(4),
    td:nth-child(6) {
        font-weight: bold;
    }

    input[type="checkbox"] {
        accent-color: black;
        width: 17px;
        height: 17px;
        cursor: pointer;
    }
`;
const ItemDetails = styled.td`
    display: flex;
    gap: 1rem;
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

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 30px;
        height: 30px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const BtnStyle = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    &:hover {
        background-color: #666;
        color: white;
    }
`;
const TFootRow = styled.tr`
    height: 100px;
    color: #a3a5a3;
`;

function Cart() {
    const [cartProduct, setCartProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        fetch("http://43.202.211.22:8080/api/cart-list", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setTotalPrice(data.totalPrice);
                dispatch(addItem(data));
                setCartProduct(data.cartResponseDtoList);
            });
    }, [dispatch]);

    const handleDeleteCart = (cartItemId) => {
        const accessToken = localStorage.getItem("accessToken");
        fetch(`http://43.202.211.22:8080/api/cart-list/${cartItemId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => {
                console.log(res);
                if (res.ok) {
                    console.log("ok");
                }
            })
            .then(() => {
                dispatch(deleteItem({ id: cartItemId }));
                setCartProduct((prev) => {
                    return prev.filter(
                        (item) => item.cartItemId !== cartItemId
                    );
                });
            });
    };
    const navigate = useNavigate();

    const handleClickOrder = () => {
        const accessToken = localStorage.getItem("accessToken");

        fetch("http://43.202.211.22:8080/api/cart/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                cartOrderDtoList: cartProduct,
            }),
        }).then((res) => {
            if (res.ok) {
                console.log("ok");
            } else {
                throw new Error("주문 목록에 담기 실패");
            }
        });
        navigate("/order");
    };

    return (
        <div>
            <PageHeader
                title="장바구니"
                handleHeaderClick={() => navigate("/mypage")}
                short={true}
            />
            <MyPageMenu order={1} />

            <CartContainer>
                <TableContainer>
                    <TableContainer>
                        <SelectedDeleteBtn>선택상품삭제</SelectedDeleteBtn>
                        <Table>
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>상품</th>
                                    <th>수량</th>
                                    <th>할인/혜택</th>
                                    <th>배송비</th>
                                    <th>주문금액</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* 장바구니 목록 */}
                                {cartProduct &&
                                    cartProduct?.map((cartItem) => (
                                        <tr key={cartItem.cartItemId}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <ItemDetails>
                                                    <div>
                                                        <img
                                                            src={
                                                                cartItem.imgUrl
                                                            }
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <ItemDescription>
                                                        <p>
                                                            {cartItem.itemName}
                                                        </p>
                                                        <div>
                                                            <p>색상: MGL</p>
                                                            <p>사이즈: XS</p>
                                                        </div>
                                                    </ItemDescription>
                                                </ItemDetails>
                                            </td>
                                            <td>
                                                <BtnContainer>
                                                    <BtnStyle>-</BtnStyle>
                                                    <div>{cartItem.count}</div>
                                                    <BtnStyle>+</BtnStyle>
                                                </BtnContainer>
                                            </td>
                                            <td>0원</td>
                                            <td>무료</td>
                                            <td>
                                                {cartItem.totalPrice.toLocaleString()}
                                                원
                                            </td>
                                            <td>
                                                <BtnContainer
                                                    onClick={() =>
                                                        handleDeleteCart(
                                                            cartItem.cartItemId
                                                        )
                                                    }
                                                >
                                                    <IoClose />
                                                </BtnContainer>
                                            </td>
                                        </tr>
                                    ))}
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
                </TableContainer>

                {/* 주문서 & 주문하기 버튼 */}
                <PaymentInfo
                    handleClickOrder={handleClickOrder}
                    totalPrice={totalPrice}
                />
            </CartContainer>
        </div>
    );
}

export default Cart;
