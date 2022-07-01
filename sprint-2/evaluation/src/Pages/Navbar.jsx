import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/register/one"}>register one</Link>
        <Link to={"/Register/two"}>register/two</Link>
       
    </div>
  )
}
