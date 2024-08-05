import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sheher from './components/Sheher'
import ListGroup from './components/ListGroup'
import QuoteComponent from './components/QuoteComponent'


const App = () => {

  

  // Change Theme

  const [theme , setTheme] = useState(true)


  const changeTheme = () => {
   theme ?  setTheme(false) :  setTheme(true)
  }

  return (
   <>
   <Navbar changeTheme={changeTheme} theme={theme}/>
   <QuoteComponent/>
   <Sheher theme={theme}/>   
   <ListGroup theme={theme}/>
   </>
  )
}

export default App