import React from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import finalintrocss from "../css/finalintrocss.css"



export default function Finalintro(){
    const [startDate,setStartDate]=useState(new Date());
    const [value,onChange]=useState("10:00");
    return(
        <div>
            <nav className="navbar-div">
                <h2>RidePal</h2>
                <button className="log-butt">Login</button>
                <button className="sign-butt">Submit</button>
            </nav>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="pick-input"/>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="drop-input"/>

        </div>
    )
}