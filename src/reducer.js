import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
    data: [],
    isLoading: false,
    hasError: false
};

export const loadReddit = createAsyncThunk(
    'reddit/loadReddit',
    async (url) => {  
        // alert(url);
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
        [loadReddit.fulfilled]: (state,action) => { 
            state.data = action.payload.data.children;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadReddit.rejected]: (state) => { 
            state.isLoading = false;
            state.hasError = true;
        },
    }  
});

export const selectData = (state) => state.reducer;
 

