import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () =>{

    return (
        <>
          <div className="hero-page lg:relative lg:top-[60px]" id="hero-section">
            <div className="hero-container">
              <div className="hero-image">
                  <Image
                  src="/assets/photo.png"
                  alt="photo"
                  width={200}
                  height={260}
                  priority={true}
                  className="w-full h-full rounded-[30px] grayscale-75 brightness-100 contrast-125"
                  />
              </div>
              <div className="hero-description">
                <div className="hero-text">
                  <h2 className="hero-caption">Hello, I am</h2>
                  <h1 className="heading text-red-900">Anamika Mukherjee</h1>
                  <h2 className="hero-sub-heading italic">A passionate Fullstack Developer</h2>
                  <p className="paragraph text-black">
                    I am a dedicated fullstack developer specialising in MERN stack development with keen interest in experimenting new tech stacks and technologies in web development. Currently, I am an intern at{" "} 
                    <Link href ="https://www.labmentix.in/" className="text-indigo-900 hover:text-indigo-700 italic">
                     Labmentix
                    </Link>.
                  </p>
                </div>
                <div className="hidden lg:w-[60px] lg:h-full lg:flex justify-end items-center"> 
                  <span className="w-[20px] h-full bg-yellow-400"></span>
                  <span className="w-[20px] h-full bg-orange-400"></span>
                  <span className="w-[20px] h-full bg-red-600"></span>
                </div>
              </div>
            </div>
            <div className="hero-mob-container">
              <div className="hero-mob-image">
                <Image
                      src="/assets/photo.png"
                      alt="photo"
                      width={120}
                      height={160}
                      priority={true}
                      className="w-[120px] h-[160px] rounded-[30px] grayscale-75 brightness-100 contrast-125"
                />
              </div>
              <div className="hero-mob-description">
                <div className="hero-mob-text">
                  <h2 className="hero-caption">Hello, I am</h2>
                    <h1 className="heading text-red-900">Anamika Mukherjee</h1>
                    <h2 className="hero-sub-heading italic">A passionate Fullstack Developer</h2>
                    <p className="paragraph text-black">I am a dedicated fullstack developer specialising in MERN stack development with keen interest in experimenting new tech stacks and technologies in web development. Currently, I am an intern at{" "} 
                      <Link href ="https://www.labmentix.in/" className="text-indigo-900 hover:text-indigo-700 italic">
                       Labmentix
                      </Link>.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default Hero;