import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"

const Table = styled.table`
  width: 1000px;
  border-top: 2px solid #caccd5;
  border-bottom: 2px solid #caccd5
`

const TheadRow = styled.tr`
  height: 60px;
  border-bottom: 2px solid #caccd5
`

function Cart() {


  const state = useSelector((state)=>state)
  console.log(state)

    return  (      
        <div>
          <h2>장바구니</h2>
          <button>선택상품삭제</button>
 <Table>
  <thead>
  <TheadRow>
          <th><input type="checkbox"/></th>
          <th>상품</th>
          <th>수량</th>
          <th>배송비</th>
          <th>주문금액</th>
          <th>삭제</th>
      </TheadRow>
  </thead>
  <tbody>
  <tr>
        <th><input type="checkbox"/></th>
          <th>
          <img src="" alt="image1"/>
            <div>
              <h5>아이템 이름</h5>
              <p>색상</p>
              <p>사이즈</p>
              <p>옵션 변경</p>
            </div>
          </th>
          <th>
            <input type="number"/>
          </th>
          <th>배송비</th>
          <th>주문금액</th>
          <th><button>X</button></th>
        </tr>
  </tbody>
  <tfoot>
    <tr>
  <td colSpan={6}>
            <p>-장바구니 저장 기간은 로그인 시 최대 90일입니다.</p>
           <p>-예약상품은 발매 시 결제 순서대로 출괴되며, 사정에 의하여 발매 연기 및 취소가 될 수 있습니다.</p></td>
           </tr>
  </tfoot>
 </Table>
      
     
    </div>
    )
}

export default Cart;
