"use client";
import React, { useState } from "react";

const Pyramid = () =>{

    const [isThirdClicked, setIsThirdClicked] = useState<boolean>(false);
    const [isSecondClicked, setIsSecondClicked] = useState<boolean>(false);
    const [isFirstClicked, setIsFirstClicked] = useState<boolean>(false);

    const handleClick3 = ()=>{
        if(isThirdClicked){
            setIsThirdClicked(false);
        }
        else{
            setIsThirdClicked(true);
        }
    }

    const handleClick2 = ()=>{
        if(isSecondClicked){
            setIsSecondClicked(false);
        }
        else{
            setIsSecondClicked(true);
        }
    }

    const handleClick1 = ()=>{
        if(isFirstClicked){
            setIsFirstClicked(false);
        }
        else{
            setIsFirstClicked(true);
        }
    }

    const renderDialogBox3 = ()=>{
        return (
            <div className="education-dialog-box-3">
                <p className="text-white text-sm tracking-wider select-none">
                    Bachelor of Engineering in Electronics and Telecommunication from Rungta College of Engineering and Technology, Raipur with 78.5%
                </p>
            </div>
        );
    }

    const renderDialogBox2 = ()=>{
        return (
            <div className="education-dialog-box-2">
                <p className="text-white text-sm tracking-wider select-none">
                    Diploma in Engineering in Electronics and Telecommunication from Govt. Girls' Polytechnic, Raipur with 79.5%
                </p>
            </div>
        );
    }

    const renderDialogBox1 = ()=>{
        return (
            <div className="education-dialog-box-1">
                <p className="text-white text-sm tracking-wider select-none">
                    Higher Secondary from Krishna Public School, Bhilai with 53.8%
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="pyramid-container">
                <div className="pyramid-structure">
                    <div className="pyramid-level-3">
                        <div className="pyramid-btn-div-3">
                            <div className="w-full h-4/5 text-wrap text-xs text-white tracking-wider flex flex-col justify-end items-center mb-2 select-none">
                                <p>
                                    Bachelor of Engineering
                                </p>
                                <p>
                                    RCET, Raipur
                                </p>
                            </div>
                            <button 
                            type="button" 
                            className="w-[120px] h-[30px] flex flex-col justify-center items-center text-sm bg-blue-800 text-white rounded-md hover:cursor-pointer hover:bg-blue-900"
                            onClick={handleClick3}
                            >
                                {isThirdClicked?"Hide Details":"Show Details"}
                            </button>
                        </div>
                    </div>
                    <div className="pyramid-level-2">
                        <div className="pyramid-btn-div-2">
                            <div className="w-full h-4/5 text-wrap text-sm text-white tracking-wide flex flex-col justify-end items-center mb-2 select-none">
                                <p>
                                    Diploma in Engineering
                                </p>
                                <p>
                                    GGPR, Raipur
                                </p>
                            </div>
                            <button 
                            type="button" 
                            className="w-[120px] h-[30px] flex flex-col justify-center items-center text-sm bg-blue-800 text-white rounded-md hover:cursor-pointer hover:bg-blue-900"
                            onClick={handleClick2}
                            >
                             {isSecondClicked?"Hide Details":"Show Details"}
                            </button>
                        </div>
                    </div>
                    <div className="pyramid-level-1">
                        <div className="pyramid-btn-div-1">
                            <div className="w-full h-4/5 text-wrap text-sm text-white tracking-wide flex flex-col justify-end items-center mb-2 select-none">
                                <p>
                                    Higher Secondary
                                </p>
                                <p>
                                    Krishna Public School, Bhilai
                                </p>
                            </div>
                            <button 
                            type="button" 
                            className="w-[120px] h-[30px] flex flex-col justify-center items-center text-sm bg-blue-800 text-white rounded-md hover:cursor-pointer hover:bg-blue-900"
                            onClick={handleClick1}
                            >
                             {isFirstClicked?"Hide Details":"Show Details"} 
                            </button>
                        </div>
                    </div>
                </div>
                {isThirdClicked && renderDialogBox3()}
                {isSecondClicked && renderDialogBox2()}
                {isFirstClicked && renderDialogBox1()}
            </div>
        </>
    );
};

export default Pyramid;