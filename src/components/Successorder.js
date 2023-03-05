import React from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import check from "../images/check.png"
import "../css/successordercss.css"

export default function Successorder(){
    return(
        <div class="parent-succ-div">
            <div className="nav-succ-order">
                
            </div>
            <img src={check}></img>
            <h2>Thank You!</h2>
            <h4>Your order has been received</h4>
            <Link to="/ordersummary">
                <p>View order summary</p>
            </Link>
            
        </div>
    )
}