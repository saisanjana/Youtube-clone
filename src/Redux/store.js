import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import sugestionsSlice from "./sugestionsSlice";

export const store = configureStore({
    reducer:{
        app:appSlice,
        suggestions: sugestionsSlice
    }
});