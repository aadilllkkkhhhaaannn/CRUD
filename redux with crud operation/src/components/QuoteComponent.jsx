import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../features/Qoute/QuoteSlice';

const QuoteComponent = () => {

   const {quoteData , isLoading , isError} = useSelector((state)=> state.Quote);

   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(fetchQuote())
   },[])

   if(isLoading || !quoteData) {
    return (
      // <div class="loader">
        <h1 className="text-center text-danger">Loading...</h1>
      // </div>
    );
   }

   
   if(isError) {
    return(
       <h1 className="text-center text-danger">Something Went wrong.!</h1>
    )
   }

  return (
   <marquee>
    <h1>{quoteData}</h1>
   </marquee>
  )
}

export default QuoteComponent