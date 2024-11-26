import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : "",
    user : {}
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        injectUser :(state,action)=>{
            state.user = action.payload;
            state.token = action.token
        },
        removeUser :(state,)=>{
            state.user = {};
            state.token = ""
        }
    }
})

export default authSlice.reducer;
export const {injectUser,removeUser} = authSlice.actions