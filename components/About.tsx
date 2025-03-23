import React from "react";
import Image from "next/image";

const About = () =>{

    return (
        <>
            <div className="about-page lg:relative lg:top-[60px]" id="about-section">
                <div className="w-1/2 h-full hidden lg:flex justify-center items-center bg-(--default)">
                    <Image 
                    src="/assets/about.svg"
                    alt="about"
                    width={600}
                    height={600}
                    />
                </div>
                <div className="about-container">
                    <div className="about-text">
                        <h1 className="heading text-violet-300 select-none">About Me</h1>
                        <div className="about-para-container select-none">
                            <p className="paragraph text-white">
                                I am a MERN stack developer based in Raipur, Chhattisgarh. I graduated in Electronics and Telecommunication Engineering from CSVTU, Bhilai. I am currently working as a fullstack development intern at Labmentix. 
                            </p>
                            <p className="paragraph text-white"> 
                                Initially, I built projects with HTML, CSS and JavaScript to develop a strong understanding of the basics in frontend development. Then I explored the world of backend development with projects focussed on frameworks like Express. Now I am working with advanced frameworks like React, Nextjs, Tailwind CSS and Typescript along with Nodejs and Express to gain experience in fullstack development.
                            </p> 
                            <p className="paragraph text-white">
                                I always try new technologies and incorporate them in my projects. I am still in this journey to build new and state-of-the-art projects while learning new things along the way.
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default About;