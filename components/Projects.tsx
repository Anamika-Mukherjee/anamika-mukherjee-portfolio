"use client"
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";

const Projects = () =>{

    return (
        <>
          <div className="projects-page" id="projects-section">
                <div className="projects-container">
                    <h1 className="heading text-violet-300 select-none">My Projects</h1>
                  
                    <div className="w-full h-auto lg:h-full flex flex-col justify-center items-center space-y-10 p-10 lg:p-0">
                        <div className="w-full h-auto lg:h-1/2 flex lg:flex-row flex-col justify-between lg:justify-center items-center"> 
                          {projects.map((project, index)=>(
                                <ProjectCard key={index} name = {project.name} techStack= {project.techStack} image = {project.images[0]} url = {project.url}/>
                            ))}
                   
                        </div>        
                    </div>
                </div> 
            </div>             
        </>
    );
};

export default Projects;