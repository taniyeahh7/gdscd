import React from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./App.scss"
// import {Container,Row,Col} from "react-bootstrap";
// import {Card,Badge,Button} from "react-bootstrap"
// import logincss from "../css/logincss.css"'
import signupcss from "../css/signupcss.css"
import signupimg from "../images/signupimg.jpg"
export default function Signup(){
    return(
        <div className="signup-bg">
                <div className="parent-signup-container">
                        <p>Customer Signup</p>
                        <input type="text" name="fname" placeholder="Enter First Name" id="fname" className="input-box-1" required/>
                        <input type="text" name="lname" placeholder="Enter Last Name" id="lname" className="input-box-2" required/>
                        
                        <input type="text" name="mobile" placeholder="Mobile" id="mobile" className="input-box-6" required/>
                        <input type="text" name="email" placeholder="Email" id="email" className="input-box-5" required/>
                        {/* <hr></hr> */}
                        <input type="password" name="pass" placeholder="Password" id="pass" className="input-box-7" required/>
                        {/* <hr></hr> */}
                        {/* <Route path="/vendsignup" element={<Vendsignup/>}/> */}
                        
                        <Link to="/moneypath">
                            <button type="submit" className="button-submit-signup">Submit</button>
                        </Link>
                        <Link to="/login">
                            <p>Already have an account? Click here</p>
                        </Link>
                        <Link to="/vendlogin">
                            <p>Want to access Vendor Account? Click here</p>
                        </Link>
                    
                </div>
        </div>
    )
    
}