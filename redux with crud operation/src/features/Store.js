import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/todoSlice";
import QuoteSlice from "./Qoute/QuoteSlice";
const store = configureStore({
    reducer : {
        todos : todoSlice,
        Quote : QuoteSlice,
    },
})

export default store;