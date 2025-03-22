"use client"
import React, {useRef} from "react";
import SkillCard from "./SkillCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { skills } from "@/constants";
  
const Skills = () =>{

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true})
    )

    return (
        <>
          <div className="skills-page" id="skills-section">
              <div className="skills-container">
                  <h1 className="heading text-[var(--brown)] select-none">My Skills</h1>
                  <div className="w-full h-full flex flex-col justify-center items-center">
                      <div className="w-full h-1/2 flex justify-center items-center">  
                        <Carousel 
                          opts={{
                                  align: "start",
                                  loop: true
                              }}
                          plugins={[plugin.current]}  
                          className="w-[80%] lg:w-[750px] h-full flex justify-center items-center px-2"
                        >
                            <CarouselContent className="w-full lg:w-full h-full flex justify-evenly items-center ml-2 p-4 space-x-10 lg:space-x-0">
                              {skills.map((skill, index)=>(
                              <CarouselItem 
                                key={index}
                                className="w-full lg:w-1/3 h-full flex justify-center items-center lg:basis-1/3"
                              >
                                  <div className="p-1">
                                    <SkillCard name={skill.name} icon={skill.icon}/>
                                  </div>
                              </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="hover:cursor-pointer"/>
                            <CarouselNext className="hover:cursor-pointer"/>
                        </Carousel>
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
};

export default Skills;