"use client"
import React, {useState} from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";

const Projects = () =>{
    const [viewMore, setViewMore] = useState<boolean>(false);
    const [viewLess, setViewLess] = useState<boolean>(true);

    return (
        <>
          <div className="projects-page" id="projects-section">
              <div className="projects-container">
                  <h1 className="heading text-[var(--default)] select-none">My Projects</h1>
                  {viewLess && (
                  <div className="w-full h-auto lg:h-full flex flex-col justify-center items-center space-y-10 p-10 lg:p-0">
                      <div className="w-full h-auto lg:h-1/2 flex lg:flex-row flex-col justify-between lg:justify-center items-center"> 
                          {projects.map((project, index)=>{
                            {if(index < 3) 
                              return (
                                <ProjectCard key={index} name = {project.name} techStack= {project.techStack} image = {project.images[0]} url = {project.url}/>
                            )}
                          })}   
                      </div>
                      <div className="w-[150px] h-[50px] flex flex-col justify-center items-center rounded-md bg-(--default)">
                        <button 
                          type="button" 
                          className="w-full h-full text-white flex justify-around items-center rounded-md p-4 hover:cursor-pointer hover:bg-(--default-light)"
                          onClick={()=>{setViewMore(true);
                                        setViewLess(false);
                                        }
                                  }
                        >
                            View More
                            <Image
                            src="/assets/chevron-down.svg"
                            alt="view more"
                            width={24}
                            height={24}
                            />
                        </button>
                      </div>
                  </div>
                  )}
                  {viewMore && (
                  <div className="w-full h-auto lg:h-full flex flex-col justify-center items-center space-y-10 p-10 lg:p-0">
                      <div className="w-full h-auto lg:h-1/2 flex lg:flex-row flex-col justify-between lg:justify-center items-center"> 
                          {projects.map((project, index)=>(
                              <ProjectCard key={index} name = {project.name} techStack= {project.techStack} image = {project.images[0]} url = {project.url}/>
                          ))}   
                      </div>
                      <div className="w-[150px] h-[50px] flex flex-col justify-center items-center rounded-md bg-(--default)">
                          <button 
                            type="button" 
                            className="w-full h-full text-white flex justify-around items-center rounded-md p-4 hover:cursor-pointer hover:bg-(--default-light)"
                            onClick={()=>{setViewLess(true);
                                          setViewMore(false);
                                        }
                                    }
                            >
                              View Less
                              <Image
                              src="/assets/chevron-up.svg"
                              alt="view less"
                              width={24}
                              height={24}
                              />
                          </button>
                      </div>
                  </div>
                  )}     
              </div>
          </div>          
        </>
    );
};

export default Projects;