import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState:{openSideBar:true},
    reducers:{
        toggleSideBar: (state) => {
            state.openSideBar = !state.openSideBar
        }
    }
});

export const {toggleSideBar} = appSlice.actions;
 export default appSlice.reducer;