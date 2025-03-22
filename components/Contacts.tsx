"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/constants";

const Contacts = () =>{
    
    return (
        <>
            <div className="contacts-page" id="contacts-section">
                <div className="contacts-container">
                    <div className="w-full h-full flex justify-between items-center">
                        <div className="contact-list">
                            <h1 className="heading text-gray-700 select-none">Contact Me</h1>
                            <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
                                <div className="email-container">
                                    <div className=" h-full w-[80px] lg:h-full p-4 bg-white flex justify-center items-center rounded-l-lg ">
                                        <Image 
                                        src = "/assets/email.png"
                                        alt = "email"
                                        width = {50}
                                        height = {50}
                                        />
                                    </div>
                                    <Link 
                                    target="_blank"
                                    href={`mailto:${contact.email}`} className="hidden lg:block ml-4 text-red-100 underline hover:text-red-300">
                                        {contact.email}
                                    </Link>   
                                    <Link 
                                    target="_blank"
                                    href={`mailto:${contact.email}`} className="w-3/5 pl-8 lg:hidden ml-4 text-red-100 text-lg hover:text-red-300">
                                        Mail Me
                                    </Link>   
                                </div>
                                <div className="linkedin-container">
                                    <div className="w-[80px] h-full p-4 bg-white flex justify-center items-center rounded-l-lg ">
                                        <Image 
                                        src = "/assets/linkedin.png"
                                        alt = "linkedin"
                                        width = {40}
                                        height = {40}
                                        />
                                    </div>
                                    <Link 
                                    target="_blank"
                                    href={contact.linkedin} className="hidden lg:block ml-4 text-sky-100 underline hover:text-sky-300">
                                        {contact.linkedin.split("//").pop()}
                                    </Link>   
                                    <Link 
                                    target="_blank"
                                    href={contact.linkedin} className="w-3/5 pl-8 lg:hidden ml-4 text-sky-100 text-lg hover:text-sky-300">
                                        View Profile
                                    </Link>   
                                </div>
                            </div>
                        </div>
                        <div className="contact-illustration">
                            <Image 
                                src = "/assets/contact.svg"
                                alt="contact"
                                width={600}
                                height={600}
                                />
                        </div>
                    </div>   
                </div>
            </div>        
        </>
    );
};

export default Contacts;