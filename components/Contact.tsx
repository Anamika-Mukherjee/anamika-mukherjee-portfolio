"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/constants";

const Contact = () =>{
    
    return (
        <>
            <div className="contacts-page" id="contact-section">
                <div className="contacts-container">
                    <div className="w-full h-full flex justify-start items-center space-y-6">
                        <div className="contact-list">
                            <h1 className="heading text-violet-300 select-none">Contact Me</h1>
                            <div className="w-full h-full flex flex-col justify-center items-start space-y-10">
                                <p className="text-white text-xl font-light tracking-wider text-justify select-none">If you have any inquiries or just want to say hello, feel free to reach out to me by clicking the button below. I will be glad to answer your inquiries and connect with you. You can also view my Linkedin and GitHub profile through the links below.</p>
                                <div className="w-[150px] h-[40px] flex justify-center items-center bg-(--default) rounded-md hover:cursor-pointer hover:bg-(--default-light)">
                                    <button 
                                    type = "button"
                                    className="w-full h-full text-white rounded-md hover:cursor-pointer"
                                    >
                                        <Link 
                                         href={`mailto:${contact.email}`}
                                         className="tracking-wider text-lg">
                                        Say Hello
                                        </Link>
                                        
                                    </button>
                                </div>
                            </div> 
                            <footer className="contact-footer">
                                <p className="text-violet-300 select-none">Connect with me:</p>
                                <div className="contact-links">
                                    <Link 
                                        href={contact.linkedin}
                                        target="_blank"
                                        > 
                                            <Image 
                                            src="/assets/linkedin.svg"
                                            alt="linkedin logo"
                                            width={30}
                                            height={30}
                                            />
                                        </Link>
                                        <Link 
                                            href={contact.github}
                                            target="_blank"
                                        > 
                                            <Image 
                                            src="/assets/github.svg"
                                            alt="github logo"
                                            width={30}
                                            height={30}
                                            />
                                        </Link>
                                </div>
                            </footer>
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

export default Contact;