import React from 'react'
import "./Navbar.css"


const Navbar = (props) => {
    console.log(props);
  return (
    <div>
     <h1>{props.title}</h1>

    </div>
  )
}

export default Navbar;