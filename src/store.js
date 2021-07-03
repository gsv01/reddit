import { configureStore } from "@reduxjs/toolkit";
import { mySlice } from "./reducer.js";


export const store = configureStore({
    reducer:   mySlice 
});