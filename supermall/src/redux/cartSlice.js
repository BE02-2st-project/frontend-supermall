import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === id);
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].amount++;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
    },
    deleteItem(state, action) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// const initState = {
//     /*
//     id: 0,
//     name: "모자",
//     price: 10000,
//     amount: 1
//     */
// };

// const cartSlice = createSlice({
//     name: "cartSlice",
//     initialState: initState,
//     reducers: {
//         // state: 기존 상태, action: 업데이트할 상태, action.payload: 상품 Id값으로..
//         addItem: (state, action) => {
//             let itemIndex = state.findIndex((a) => a.id === action.payload);
//             if (itemIndex !== -1) {
//                 // 장바구니에 있는 상품이면
//                 state[itemIndex].amount++;
//             } else {
//             }
//             return {};
//         },
//         changeCount(state, action) {
//             let itemIndex = state.findIndex((a) => a.id === action.payload);
//         },
//         deleteItem(state, action) {
//             action.payload.remove();
//         },
//     },
// });

// export const cartSave = cartSlice.actions;
// export default cartSlice.reducer;
