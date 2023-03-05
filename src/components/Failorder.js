import React from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import ques from "../images/ques.png"
import "../css/failordercss.css"

export default function Failorder(){
    return(
        <div class="parent-succ-div">
            <div className="nav-succ-order">
                
            </div>
            <img src={ques}></img>
            <h2>Oops!</h2>
            <h4>Something went wrong on our end, redirecting you back...</h4>
        </div>
    )
}