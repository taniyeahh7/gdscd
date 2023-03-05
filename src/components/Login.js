import React from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import introcss from "../css/introcss.css"

export default function Login(){
    return(
        <div>
            <div className="parent-signup-container">         
                <p>Customer Login</p>
                <input type="text" name="mobile" placeholder="Mobile" id="mobile" className="input-box-6" required/>

                <input type="password" name="pass" placeholder="Password" id="pass" className="input-box-7" required/>
                
                <Link to="/moneypath">
                    <button type="submit" className="button-submit-signup">Submit</button>  
                </Link>
                        
                    
                </div>
        </div>
    )
}