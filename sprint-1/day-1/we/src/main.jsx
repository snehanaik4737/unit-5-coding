import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import {createRoot} from "react-dom/client"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// const rootElement =document.getElementById("root");
// const root=createRoot(rootElement);

// //without jsx

// const elem =React.createElement("button",{onClick:()=>alert("oops")},"CLICK ME");



// const elemWithJSX=(
//  <button onClick={()=>alert("with jsx")}> CLICK ME</button>
// )


//  function Button(props){
//    return  <button onClick={()=>props?.handleClick()}>{props.title}</button>
//  }


//  const MyApp=React.createElement("div",{},[
//    elem,
//    elemWithJSX,
//    Button({title:"hello",handleClick:()=>alert("1")}),

//    Button({title:"hello2",handleClick:()=>alert("2")}),
//    Button({title:"hello3",handleClick:()=>alert("3")}),
//    //jsx
//    <div>
//      <Button handleClick={()=>alert("jsx")} title="jsx"></Button>
//    </div>
//  ])

//  root.render(MyApp)