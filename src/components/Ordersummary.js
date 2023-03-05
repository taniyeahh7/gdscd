import React from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import "../css/ordersummarycss.css"

export default function Ordersummary(){
    return(
        <div>
            <div className="parent-div-ordersummary">
                <h2>
                    Order Summary
                </h2>
                <ul className="order-summ-list">
                    <li>Customer ID:  278342874</li>
                    <li>Booking ID:  37368273</li>
                    <li>Vehicle Type:  Scooter</li>
                    <li>Pickup Location: 23, Rober Marg, Vellore, Tamil Nadu</li>
                    <li className="dad">Vehicle Model:  Vespa 9x</li>
                    
                </ul>
            </div>
            

        </div>
    )
}