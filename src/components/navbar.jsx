import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function NavBar() {
    return (
        <div className="text-white hidden md:backdrop-blur-lg md:flex lg:gap-24 h-20 items-center md:gap-10 md:pr-10 md:pl-10 lg:pr-60 lg:pl-60 font-barlow-condensed tracking-[2.7px]">
            <Link to="/" className="flex gap-2 ml-4 text-lg border-b-4 pb-7 -mb-7 border-transparent hover:border-gray-400 transition-all"><span className="hidden lg:block">00</span> HOME</Link>
            <Link to="/destination" className="flex gap-2 ml-4 text-lg border-b-4 pb-7 -mb-7 border-transparent hover:border-gray-400 transition-all"><span className="hidden lg:block">01</span> DESTINATION</Link>
            <Link to="/crew" className="flex gap-2  ml-4 text-lg border-b-4 pb-7 -mb-7 border-transparent hover:border-gray-400 transition-all"><span className="hidden lg:block">02</span> CREW</Link>
            <Link to="/technology" className="flex gap-2 ml-4 text-lg border-b-4 pb-7 -mb-7 border-transparent hover:border-gray-400 transition-all"><span className="hidden lg:block">03</span> TECHNOLOGY</Link>
        </div>
    );
}

export default NavBar;