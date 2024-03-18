import { createSlice } from "@reduxjs/toolkit";

const initState = {
    /*
    id: 0,
    name: "모자",
    price: 10000,
    amount: 1
    */
};

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initState,
    reducers: {
        // state: 기존 상태, action: 업데이트할 상태, action.payload: 상품 Id값으로..
        addItem: (state, action) => {
            let itemIndex = state.findIndex((a) => a.id === action.payload);
            if (itemIndex !== -1) {
                // 장바구니에 있는 상품이면
                state[itemIndex].amount++;
            } else {
            }
            return {};
        },
        changeCount(state, action) {
            let itemIndex = state.findIndex((a) => a.id === action.payload);
        },
        deleteItem(state, action) {
            action.payload.remove();
        },
    },
});

export const cartSave = cartSlice.actions;
export default cartSlice.reducer;
