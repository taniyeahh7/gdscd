import React from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"

export default function Moneypath(){
    return(
        <div>
            <div className="parent-div-ordersummary">
                        <p>Choose payment method</p>
                        <label class="container">UPI/GPay
                            <input type="radio" name="fname" placeholder="Usernme" id="fname" className="input-box-1" required/>
                        </label>
                        
                        <label class="container">Credit/Debit Card
                            <input type="radio" name="lname" placeholder="Enter Last Name" id="lname" className="input-box-2" required/>
                        </label>
                        
                        <label class="container">Wallet
                            <input type="radio" name="mobile" placeholder="Mobile" id="mobile" className="input-box-6" required/>   
                        </label>
                        
                        <label class="container">Cash
                            <input type="radio" name="email" placeholder="Email" id="email" className="input-box-5" required/>
                        </label>
                        
                        {/* <hr></hr> */}
                        {/* <input type="password" name="pass" placeholder="Password" id="pass" className="input-box-7" required/> */}
                        {/* <hr></hr> */}
                        {/* <Route path="/vendsignup" element={<Vendsignup/>}/> */}
                        
                        <Link to="/successorder">
                            <button type="submit" className="button-submit-signup">Submit</button>
                        </Link>
            </div>
            

        </div>
    )
}