import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState:{openSideBar:true, videos : []},
    reducers:{
        toggleSideBar: (state) => {
            state.openSideBar = !state.openSideBar
        },
        hideSideBar: (state) => {
            state.openSideBar = false
        },
        setVideos: (state, action) => {
            state.videos = [...action.payload]
        }
    }
});

export const {toggleSideBar, hideSideBar, setVideos} = appSlice.actions;
export default appSlice.reducer;