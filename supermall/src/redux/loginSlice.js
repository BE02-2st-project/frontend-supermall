import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initState = {
    email: "",
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) =>
    loginPostAsync(param)
);

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initState,
    reducers: {
        // state: 기존 상태, action: 업데이트할 상태
        login: (state, action) => {
            console.log("login", action);
            return { email: action.payload };
        },
        logout: (state, action) => {
            console.log("logout", action);
            return { ...initState };
        },
    },

    /*
    // createAsyncThunk
    extraReducers: (builder) => {
        builder
            .addCase(loginPostAsync.fulfileed, (state, action) => {
                console.log("fulfilled");
                const payload = action.payload;

                return payload;
            })
            .addCase(loginPostAsync.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(loginPostAsync.rejected, (state, action) => {
                console.log("rejected");
            });
    },
    */
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
