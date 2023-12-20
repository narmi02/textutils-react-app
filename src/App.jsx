import './App.css'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import About from './components/About'
import Alert from './components/Alert'
import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";






export default function App() {
  const [mode,setmode]=useState("light")
  const[btn,setbtn]=useState("Enable Dark Mode")
  const[alert,setalert]=useState(null)
  const showalerts=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  const toggle=()=>{
    if(mode=="dark"){
      setmode("light")
      setbtn("Enable Dark Mode")
      document.body.style.backgroundColor="white"
      showalerts("Light Mode has been enabled","success")
      document.title="TextUtils - Light Mode"
    }
    else {
      setmode("dark")
      setbtn("Disable Dark Mode")
      document.body.style.backgroundColor="rgb(42, 61, 62)"
      showalerts("Dark Mode has been enabled","success")
      document.title="TextUtils - Dark Mode"

    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Textutils" mode={mode} toggle={toggle} btn={btn} />
    <Alert alert={alert}/>
      <Routes>
        <Route path='/' element={<Textarea text="Enter the text to perform operations" mode={mode}  showalert={showalerts} />} />

        <Route path='/about' element={<About mode={mode} />} />
      </Routes>
      </BrowserRouter>
  </>
  )
}
