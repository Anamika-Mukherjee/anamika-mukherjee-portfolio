import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps{
    name: string,
    techStack: string,
    image: string,
    url: string,
}

const ProjectCard = ({name, image, url}: ProjectProps) =>{

    return (
        <>
            <Link 
            href={url}
            target="_blank"
            className=" w-[250px] h-[250px] mb-6 lg:mb-0 bg-[var(--default)] text-white text-lg rounded-[20px] flex flex-col justify-evenly items-center p-4 lg:mr-10 outline-3 outline-[var(--lavender)] -outline-offset-8 transition duration-150 ease-in shadow-red-900 shadow-md hover:scale-90 hover:cursor-pointer hover:shadow-xl"
            >
                <Image 
                src={image}
                alt={name}
                width={80}
                height={80}
                className="rounded-lg"
                />
                <p className="text-wrap text-center tracking-wider">
                 {name}
                </p> 
            </Link>  
        </>
    );
};

export default ProjectCard;