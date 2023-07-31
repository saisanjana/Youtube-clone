import { createSlice } from "@reduxjs/toolkit";

export const suggestionsSlice = createSlice({
    name: "suggestions",
    initialState: {},
    reducers:{
        setSuggestionsData: (state, action) =>{
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const {setSuggestionsData} = suggestionsSlice.actions;
export default suggestionsSlice.reducer;