import React from "react";
import logo from "./images/logo.png"



export default function Header(){
    return(
        <header className="heder--">
            <a href="#"><img className="logo" src={logo} alt="logo" /></a> 
            <nav className="navbar">
                <li><a href="#">MEN</a></li>
                <li><a href="#">WOMEN</a></li>
                <li><a href="#">KIDS</a></li>
                <li><a href="#">COLLECTION</a></li>
                <li><a href="#">TRENDS</a></li>
            </nav> 
            <button className="header-btn">Login</button>    

        </header>
    )
}



