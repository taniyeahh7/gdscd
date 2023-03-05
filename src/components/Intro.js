import React from "react"
import introcss from "../css/introcss.css"
import introimg from "../images/introimg.png"
import introscooty from "../images/introscooty.jpg"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {Link} from "react-router-dom"
import imm1 from "../images/imm1.png"
import imm2 from "../images/imm2.png"
import imm3 from "../images/imm3.png"

export default function Intro(){
    const [startDate,setStartDate]=useState(new Date());
    const [value,onChange]=useState("10:00");
    return(
        <div className="for-bg">
            <div className="navbar">
                <h1>RidePal</h1>
                {/* <h3>Welcome to RidePal</h3>
                <h4>Your one stop ride shop</h4>
                <p>Your destination for convenient, safe and thrilling road trips</p> */}
                <input type="text" placeholder="Enter Location" className="locat-inp"/>
                <div className="parent-inp">
                    <div className="inp-block-1">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="pick-inp"/>
                        <input type="text" placeholder="Enter time" className="pick-time"/>{/*check this */}
                    </div>
                    <div className="inp-block-2">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="drop-inp"/>
                        <input type="text" placeholder="Enter time" className="pick-time"/>{/*check this */}
                        {/* <label for="dog-names">Choose a dog name:</label> */}
                        
                    </div>
                </div>
                <select name="choose-vehicle" className="choose-vehicle">
                    <option value="scooter">Scooter</option>
                    <option value="bike">Bike</option>
                    <option value="car">Car</option>
                </select>
                <br></br>
                <Link to="/Signup">
                    <button type="submit" className="button-search" placeholder="Search">
                        Submit
                    </button>
                </Link> 

            </div>
            
            <div className="divintroimg">
                {/* <img src={i2}></img> */}
                <div className="bl-1">
                    <img src={imm2}/>
                    <p>Revolutionizing convenience</p>
                </div>
                <div className="bl-2">
                    <img src={imm3}/>
                    <p>Enforcing safety</p>
                </div>
                <div className="bl-3">
                    <img src={imm1}/>
                    <p>Facilitating memories</p>
                </div>
            </div>
        </div>
    )
}

// import "bootstrap/dist/css/bootstrap.min.css"
// // import "./App.scss"
// import {Container,Row,Col} from "react-bootstrap";
// import {Card,Badge,Button} from "react-bootstrap"