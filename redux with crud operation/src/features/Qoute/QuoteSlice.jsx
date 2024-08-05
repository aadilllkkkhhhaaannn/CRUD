import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const quoteSlice = createSlice( {
    name : "Quote",
    initialState : {
    isLoading : false,
    isError : false,    
    // qouteData : "Qoute From Slice - Redux",
    quoteData : null,
    },

    reducers : {},

    extraReducers : (builder) => {
        builder
        .addCase(fetchQuote.pending , (state , action) => {
            state.isLoading = true;
            state.isError = false;
            state.quoteData = null;

        })

        .addCase(fetchQuote.fulfilled , (state , action) => {
            state.isLoading = false;
            state.isError = false;
            state.quoteData = action.payload;
        })

        .addCase(fetchQuote.rejected , (state , action) => {
            state.isLoading = false;
            state.isError = true;
            state.quoteData = null;

        })

    }
})

export default quoteSlice.reducer


export const fetchQuote = createAsyncThunk("FETCH/QOUTE" , async() => {
    const response = await fetch("https://quotable.io/random");
    const data = await response.json();
    return data.content;
}) 

// Error > Api is not call
// isLoading > Api is runnig
// Fulfilled > data is come  
