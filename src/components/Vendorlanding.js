import React from "react"
import {BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react-dom"
import "../css/vendorlandingcss.css"

export default function Vendorlanding(){
    return(
        <div>
            <div className="parent-div">
                <div className="grp-1-block">
                    <div className="block-1">
                        <h2>
                            Vehicles Out
                        </h2>
                        <h3>5</h3>
                    </div>
                    <div className="block-2">
                        <h2>
                            Vehicles Available
                        </h2>
                        <h3>5</h3>
                    </div>
                </div>
                
                <div className="grp-2-block">
                    <div className="block-3">
                        <h2>
                            Scheduled rides
                        </h2>
                        <h3>5</h3>
                    </div>
                    <div className="block-4">
                        <h2>
                            Vehicles out
                        </h2>
                        <h3>5</h3>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}