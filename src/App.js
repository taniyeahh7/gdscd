import React from "react"
import Intro from "./components/Intro"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Vendlogin from "./components/Vendlogin"
import Vendsignup from "./components/Vendsignup"
import Successorder from "./components/Successorder"
import Failorder from "./components/Failorder"
import Vendorlanding from "./components/Vendorlanding"
import Ordersummary from "./components/Ordersummary"
import Moneypath from "./components/Moneypath"
// import trial from "./components/trial"
import { BrowserRouter as Router,  
  Route,Routes,} from "react-router-dom";
// import Login from "./components/Login"
// import trial from "./components/trial" 
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./App.scss"
// import {Container,Row,Col} from "react-bootstrap";
// import {Card,Badge,Button} from "react-bootstrap"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/vendlogin" element={<Vendlogin/>}/>
          <Route path="/vendsignup" element={<Vendsignup/>}/>
          <Route path="/successorder" element={<Successorder/>}/>
          <Route path="/failorder" element={<Failorder/>}/>
          <Route path="/vendorlanding" element={<Vendorlanding/>}/>
          <Route path="/ordersummary" element={<Ordersummary/>}/>
          <Route path="/moneypath" element={<Moneypath/>}/>
          {/* <Route path="/trial" element={<trial/>}/> */}
        </Routes>
      </Router>
    </div>   
  );
}

export default App;
