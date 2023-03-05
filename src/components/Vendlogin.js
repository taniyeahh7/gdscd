import React from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import "../css/vendlogincss.css"

export default function Vendlogin(){
    return(
    <div>
        <div className="parent-signup-container">         
            <p>Vendor Login</p>
            <input type="text" name="mobile" placeholder="Mobile" id="mobile" className="input-box-6" required/>

            <input type="password" name="pass" placeholder="Password" id="pass" className="input-box-7" required/>
            
            <Link to="/vendorlanding">
                <button type="submit" className="button-submit-signup">Submit</button>
            </Link>
            <Link to="/vendsignup">
                <p>New Vendor? Click here</p>
            </Link>        
                        
        </div>
    </div>
        
    )
}

