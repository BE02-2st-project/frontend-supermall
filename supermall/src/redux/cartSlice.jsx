import { createSlice } from "@reduxjs/toolkit";

const selectedItem = createSlice({
    name : 'deliveredItem',
    initialState: [
        {id: 1, name:'White', count: 1}
    ],
    reducers:{
        addItem(state, action){
           state.push(action.payload)
        }
    }
})

export default selectedItem
export const { addItem } = selectedItem.actions  