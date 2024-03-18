import { createSlice } from "@reduxjs/toolkit";

const initState = {
    email: "",
};

const signupSlice = createSlice({
    name: "signupSlice",
    initialState: initState,
    reducers: {
        // state: 기존 상태, action: 업데이트할 상태
        signup: (state, action) => {
            console.log("login", action);
            return { email: action.payload };
        },
    },
});

export const signup = signupSlice.actions;
export default signupSlice.reducer;
