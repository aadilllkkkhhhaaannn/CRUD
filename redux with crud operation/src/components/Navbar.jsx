import React from 'react'



const Navbar = ({todo , theme , changeTheme}) => {
  return (
    <nav className={theme ? "navbar bg-success" : "navbar bg-primary"}>
    <div className="container-fluid">
      <span className={theme ? "navbar-brand mb-0 text-dark" : "navbar-brand mb-0 text-light"}>Redux with crud operation</span>
      {/* <button className= "btn btn-dark float-end"
    >GAYAB</button> */}
      <button className= {theme ? "btn btn-info rounded-0" : "btn btn-warning rounded-0"}
      onClick={() => changeTheme()} >
       {theme ?  "LIGHT MODE" :  "DARK MODE"}
        </button>
    </div>
  </nav>
)
}

export default Navbar
