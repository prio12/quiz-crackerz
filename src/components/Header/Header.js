import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Links from "../../Links/Links";

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes =[
        {id:1, name:'Topics', path:'/'},
        {id:2, name:'Statistics', path:'/statistics'},
        {id:3, name:'Blogs', path:'/blogs'},
    ]
  
  return (
    <nav className="bg-purple-200 w-full">
        
        <div onClick={() =>setOpen(!open)} className="h-6 w-6 md:hidden">
            {
                open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>

            }
        </div>
        <ul className={`bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
            {
                routes.map(route =><Links key={route.id} route={route}></Links>)
            }

        </ul>
    </nav>
  );
};

export default Header;
