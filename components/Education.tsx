import React from "react";
import Image from "next/image";
import Pyramid from "@/components/Pyramid";

const Education = () =>{

    return (
        <>
            <div className="education-page" id="education-section">
                <div className="education-container">
                    <h1 className="heading text-violet-300 select-none">My Education</h1>
                    <div className="hidden w-full h-full lg:flex justify-between items-center">
                        <div className="w-[300px] h-[600px] ">
                            <Image 
                            src="/assets/education.svg"
                            alt="education"
                            width={300}
                            height={600}
                            className="w-full h-full"
                            />
                        </div>
                        <Pyramid />
                    </div>
                </div>
                <div className="education-mob-container">
                    <h1 className="heading text-violet-300 select-none">My Education</h1>
                    <div className="education-mob-content">
                        <div className="education-mob-dialog">
                            <p className="text-white text-sm tracking-wider select-none">
                                Bachelor of Engineering in Electronics and Telecommunication from Rungta College of Engineering and Technology, Raipur with 78.5%
                            </p>
                        </div>
                        <div className="education-mob-dialog">
                            <p className="text-white text-sm tracking-wider select-none">
                                Bachelor of Engineering in Electronics and Telecommunication from Rungta College of Engineering and Technology, Raipur with 78.5%
                            </p>
                        </div>
                        <div className="education-mob-dialog">
                            <p className="text-white text-sm tracking-wider select-none">
                                Bachelor of Engineering in Electronics and Telecommunication from Rungta College of Engineering and Technology, Raipur with 78.5%
                            </p>
                        </div>
                    </div>
                </div> 
            </div>          
        </>
    );
};

export default Education;