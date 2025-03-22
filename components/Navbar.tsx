"use client"
import React, {useState} from "react";
import Image from "next/image"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";

const Navbar = () =>{
    const path = usePathname();
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <div className="w-full h-full">
          <nav className="navbar-container">  
            <ul className="flex justify-center items-center space-x-5">
              {navItems.map(({label, url}, index)=>(
              <Link key={index} href={url}>
                <li className={path === url?"text-violet-500":"hover:text-violet-300"}>
                {label}
                </li>
              </Link>
              ))}    
            </ul>        
          </nav>
          {!open &&
            <nav className="mobile-nav">
              <button 
              type="button" 
              className="w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer ml-2"
              onClick={()=>setOpen(true)}
              >
                <div>
                  <Image 
                  src="/assets/menu.svg"
                  alt="menu"
                  width={40}
                  height={40}
                  />
                </div>
              </button>
            </nav>
          }
          {open && (
          <div className="nav-list">
            <div className="w-full h-[40px] flex justify-end items-center text-lg px-4 pt-4">
              <button 
                type="button"
                onClick={()=>setOpen(false)}
                className="flex justify-center items-center text-black w-[24px] h-[24px] bg-white rounded-sm outline-1 -outline-offset-2 outline-black hover:cursor-pointer hover:bg-gray-300 hover:scale-99"
              >
                &#10006;
              </button>
            </div>
            <ul className="flex flex-col justify-start items-start space-y-10">
              {navItems.map(({label, url}, index)=>(
              <Link key={index} href={url} onClick={()=>setOpen(false)}>
                <li className={path === url?"text-violet-500":"text-white hover:text-violet-300"}>
                {label}
                </li>
              </Link>
              ))}    
            </ul>   
          </div>
          )}
        </div>
    );
};

export default Navbar;