import React from "react";
import logo from "../assets/logo.png"

export const Header = () => {
    return(
        <header className="w-full bg-primary h-1/6 flex items-center justify-center">
            <img src={logo} alt="logo of todo" />
        </header>
    )
}