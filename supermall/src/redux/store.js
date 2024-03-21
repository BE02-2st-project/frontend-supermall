import { configureStore } from "@reduxjs/toolkit";
import selectedItem from "./cartSlice";






export default configureStore({
    reducer:{
        selectedItem : selectedItem.reducer
    }
})
