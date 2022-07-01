import React, { useContext } from 'react'
import { AppContext } from '../AppContext/AppContextProvider'
import style from "./Button.module.css"
export const Button = ({text,onClick}) => {

    const [theme,toggleTheme] =useContext(AppContext)

  return (
   <button className={`${style.buttonBase } ${theme==='light'? style.buttonLight : style.buttonDark}`}>
       {text}

   </button>
  )
}
