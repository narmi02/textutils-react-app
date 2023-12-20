import React from 'react'
import {Link} from "react-router-dom"


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-${props.mode=="light"?"rgba(225, 231, 236, 1)":"black"} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode=="dark"?"white":"dark"}`} to="/"><h4>TextUtils</h4></Link>
          
            <ul className="me-auto mb-2 mb-lg-0 d-flex flex-row mx-3" style={{color:props.mode=="dark"?"white":"black"}}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>    
        <div className={`form-check form-switch text-${props.mode=="dark"?"light":"dark"}`}>
          <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btn}</label>
        </div>
        </div>
    </nav>
   </>
    )
}
