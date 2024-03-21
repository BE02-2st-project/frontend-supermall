import React, { useEffect, useState } from "react";
import styled from "styled-components"
import PaymentInfo from "./PaymentInfo"
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../redux/cartSlice";


const CartContainer = styled.div`
display: flex;
justify-content: space-around;
margin: 3%;
overflow: auto;
`
const TableContainer = styled.div`
 width: 70%;
 height: 60vh;
 `

 const SelectedDeleteBtn = styled.button`
 border: 1px solid #caccd5;
 padding: 5px 20px;
 background-color: transparent;
 margin-bottom: 20px;
 cursor: pointer;
 `

const Table = styled.table`
  table-layout: auto; 
  width: 100%;
  border-top: 2px solid #caccd5;
  border-bottom: 2px solid #caccd5;
  margin : auto;
  border-spacing: 0px 20px;
  border-collapse: collapse;

  input[type="checkbox"] {
    accent-color: black;
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
`
const TheadRow = styled.tr`
  height: 60px;
  border-bottom: 2px solid #caccd5;

  button{
    margin: 10px;
  }
`
const TBodyRow = styled.tr`
height: 200px;
border-bottom: 2px solid #caccd5;

th{
  font-weight: normal;
}
`

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;

  img{
    width: 150px;
    height: 150px
  }
`

const CountContainer = styled.div`
  display: flex;


  div{
    width: 30px;
    height: 30px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const BtnStyle = styled.button`
width: 30px;
height: 30px;
border: none;
background-color: transparent;
font-size: 20px;
cursor: pointer
`
const TFootRow = styled.tr`
  height: 100px;
  color: #a3a5a3
  `

function Cart() {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [cartProduct, setCartProduct] = useState([])

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
        dispatch(addItem(data));
        setCartProduct(data.cartResponseDtoList)
      });
  }, [dispatch]);

  console.log('cartItems', cartItems)

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
        setCartProduct(prev => {
          return prev.filter(item => item.cartItemId !== cartItemId);
        });
      });
  };
  console.log('product',cartProduct)

return  (
<div>
  <CartContainer>       
  <TableContainer>
  <SelectedDeleteBtn>선택상품삭제</SelectedDeleteBtn>
 <Table>
    <thead >
  <TheadRow>
          <th><input type="checkbox"/></th>
          <th>상품</th>
          <th>수량</th>
          <th>할인/혜택</th>
          <th>배송비</th>
          <th>주문금액</th>
          <th>삭제</th>
  </TheadRow>
  </thead>

  <tbody>
      {
      cartProduct && cartProduct?.map((cartItem) => (
        <TBodyRow key={cartItem.cartItemId}>
          <th><input type="checkbox" /></th>
          <th>
            <ItemDetails>
              <img src={cartItem.imgUrl} alt="img"/>
              <h4>{cartItem.itemName}</h4>
            </ItemDetails>
          </th>
          <th>
              <CountContainer>
              <BtnStyle>-</BtnStyle>
              <div>{cartItem.count}</div>
              <BtnStyle>+</BtnStyle>
              </CountContainer>
           </th>
          <th>
            <p>0원</p>
          </th>
          <th>무료</th>
          <th>{cartItem.totalPrice}원</th>
          <th>
            <BtnStyle onClick={() => handleDeleteCart(cartItem.cartItemId)}>X</BtnStyle>
          </th>
        </TBodyRow>
      ))
      }
    </tbody>
     <tfoot>
    <TFootRow>  
  
        <td colSpan={7}>
            <p style={{marginBottom:"5px"}}>-장바구니 저장 기간은 로그인 시 최대 90일입니다.</p>
           <p>-예약상품은 발매 시 결제 순서대로 출괴되며, 사정에 의하여 발매 연기 및 취소가 될 수 있습니다.</p></td>
           </TFootRow>
  </tfoot>
 </Table>
 </TableContainer>
 <PaymentInfo/>
 </CartContainer> 
     </div>
  )
                }

   
export default Cart;