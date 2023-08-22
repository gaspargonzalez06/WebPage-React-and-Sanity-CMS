import React  from "react";

import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png"
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
    <header className="bg-white-500">
        <div className="container mx-auto flex justify-between">
            <nav className="flex ">
                <NavLink to ="/" exact="true"
                activeclassname="text-white"
                 className="inflex-flex items-center py-6 px-8 mr-4 text-red-100 hover:text-blue-500 text-4xl font-bold cursive tracking-widest">
<img src={logo} alt=""></img>
                </NavLink>
                <NavLink to ="/post" 
                className="inline-flex items-center py-3 px-8 my-6 rounded text-gray-600 hover:text-blue-500 font-bold"
                activeclassname="active">
                    Blog Post
                </NavLink>
                <NavLink to = "/project" 
                className="inline-flex items-center py-3 px-8 my-6 rounded text-gray-600 hover:text-blue-500 font-bold"
                activeclassname="active">
                    Projects
                </NavLink>
                <NavLink to ="/about" 
                className="inline-flex items-center py-3 px-8 my-6 rounded text-gray-600 hover:text-blue-500 font-bold"
                activeclassname="active">
                    About
                </NavLink>
              
            </nav>
            <div className="inline-flex py-8 px-3 my-6">

            <SocialIcon url="https://www.facebook.com/PospanPanamayCentroamerica/?locale=es_LA" className="mr-4 " target="_blank" fgColor="#fff" style={{height:35,width:35}}>

</SocialIcon>
<SocialIcon url="https://www.linkedin.com/in/pospan-s-a-9ba205148/?originalSubdomain=pa" className="mr-4 " target="_blank" fgColor="#fff" style={{height:35,width:35}}>

</SocialIcon>
            </div>
        </div>
    </header>
        )
}