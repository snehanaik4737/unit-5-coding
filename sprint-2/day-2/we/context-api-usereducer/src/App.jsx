import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './Button/Button'
import {AppContext} from "./AppContext/AppContextProvider"
import { Counter } from './Counter/Counter'
import { Gigub } from './Counter/Gigub'

function App() {
const[state,toggleTheme]=useContext(AppContext)

  return (
    <div className="App">
      {/* <Button text="THEME"></Button>
      <button onClick={toggleTheme}>Toggle</button> */}

      <Counter/>
      <Gigub/>
    </div>
  )
}

export default App
