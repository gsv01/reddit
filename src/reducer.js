import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
    data: [],
    isLoading: false,
    hasError: false
};

export const loadReddit = createAsyncThunk(
    'reddit/loadReddit',
    async (url) => { 
        const response = await fetch(url);
        const json = await response.json();  
        return json;
    }
);

 // const data = json.data; //it has children

export const mySlice = createSlice({
    name: 'reddit',
    initialState: initialState,
    reducers: {
 
    },
    extraReducers: {
        [loadReddit.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadReddit.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadReddit.fulfilled]: (state,action) => {
            const data = action.payload;  
            state.data = data.data.children;
            state.isLoading = false;
            state.hasError = false;
        }
    }  
});

export const selectData = (state) => state.reducer;
 

