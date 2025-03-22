import React from "react";
import Image from "next/image";

const SkillCard = ({name, icon}: {name: string, icon: string}) =>{
    return (
        <>
            <div className="w-[200px] h-[200px] bg-black rounded-[40px] flex flex-col justify-evenly items-center outline-3 outline-[var(--orange-lighter)] -outline-offset-8 transition duration-150 ease-in hover:scale-110 hover:cursor-pointer">
                <Image 
                src={icon}
                alt="html-logo"
                width={50}
                height={50}
                />
                <p className="text-[var(--orange-light)] text-xl font-extrabold tracking-widest">
                {name}
                </p>
            </div>           
        </>
    );
};

export default SkillCard;
