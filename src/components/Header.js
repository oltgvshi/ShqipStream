import React from "react";

function Header(){
    return (
        <div className="navbar">
        <button className="hamburger">Settings</button>
        <img src="https://i.imgur.com/W8xic1e.png" className="logo"></img>
        <button className="login">Login</button>
        </div>
    )
}

export default Header;