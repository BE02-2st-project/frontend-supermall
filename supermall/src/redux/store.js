import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import signupSlice from "./signupSlice";

export default configureStore({
    reducer: {
        loginSlice: loginSlice,
        signupSlice: signupSlice,
    },
});
