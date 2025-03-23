"use client";
import React, {useEffect, useState} from "react";
import { useParams } from "next/navigation";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetails{
    name: string,
    description: string,
    techStack: string,
    detailedDesc: string,
    gitHubLink: string,
    deploymentLink?: string,
    images: string[],
};

const Page = ()=>{
    const {project} = useParams();
    const [projectDetails  = {
        name : "",
        description : "",
        techStack: "",
        detailedDesc: "", 
        gitHubLink: "",
        deploymentLink: "",
        images: []
    }, setProjectDetails] = useState<ProjectDetails>();
   
    useEffect(()=>{
       projects.map((projectData)=>{
          if(projectData.url.split("/").pop() === project){
            const {name, description, techStack, gitHubLink, detailedDesc, deploymentLink, images} = projectData;
            setProjectDetails({name, description, techStack, detailedDesc, gitHubLink, deploymentLink, images});
          }
       })
    }, []);  

    return(
      <div className="project-details-page">
        <div className="project-details-container">
          <h1 className="font-[var(--font-lato)] font-bold text-2xl tracking-wider lg:heading text-(--brown)">
            {   projectDetails && 
                projectDetails.name
            }
          </h1>
          <div className="w-4/5 h-full flex flex-col justify-between items-center space-y-10">
            <p className="project-description">
              {projectDetails.description}
            </p>
            <div className="w-full h-full flex justify-center items-center">
              <ul className="w-full h-auto flex lg:flex-row flex-col justify-around items-center p-8 space-y-6 lg:space-y-0 flex-wrap bg-(--brown) lg:pl-8 rounded-[30px] outline-3 -outline-offset-8 outline-(--cream)">
              {projectDetails.images.map((image, index)=>(
                index > 0 && (
                  <li key={index} className="w-auto h-auto lg:w-[300px] lg:h-[350px] lg:mr-10 flex justify-center items-center">
                    <Link
                    href={image}
                    target="_blank"
                    >
                    <Image 
                    id={`image-${index}`}
                    src={image}
                    alt="project image"
                    width={280}
                    height={280}
                    className="rounded-md shadow-black shadow-lg transition duration-150 ease-in hover:cursor-pointer hover:scale-110 hover:shadow-md"
                    />
                    </Link>
                  </li>
                )
              ))}
              </ul>
            </div>
            <div className="w-full h-auto p-2 lg:h-[60px] flex justify-start items-center rounded-md bg-(--orange-lighter) lg:p-8">
              <p className="text-xl flex tracking-wider text-amber-100">
                Technologies used:{" "}
                <span className="ml-2 font-semibold">{projectDetails.techStack}</span> 
              </p>
            </div>
            <div className="w-full h-auto text-lg flex flex-col justify-center items-start space-y-2 self-start tracking-wider text-amber-100 p-8 bg-(--orange-lighter) rounded-md">
              <span className="font-bold mr-4">Description:</span>
              <p className="text-justify">{projectDetails.detailedDesc}</p>
            </div>
            <div className="w-full h-auto p-8 flex-wrap flex justify-start items-center rounded-md bg-(--orange-lighter) text-lg self-start tracking-wider text-amber-100">
              <span className="mr-4 font-bold">GitHub Link:</span>
              <Link 
              href={projectDetails.gitHubLink}
              target="_blank"
              className="text-red-900 hover:text-red-950 underline font-semibold">
                {projectDetails.gitHubLink}
              </Link> 
            </div>
              {projectDetails.deploymentLink && (
              <div className="w-full h-auto p-8 flex justify-start items-center rounded-md bg-(--orange-lighter) text-lg self-start tracking-wider text-amber-100">   
                <span className="mr-4 font-bold">Project Link:</span>
                <Link 
                href={projectDetails.deploymentLink}
                target="_blank"
                className="text-red-900 hover:text-red-950 underline font-semibold">
                  {projectDetails.deploymentLink}
                </Link>
              </div>
              )}
          </div>
        </div>
      </div>
    );
}

export default Page;