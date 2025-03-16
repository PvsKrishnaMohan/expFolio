"use client";
import React from "react";
import { BackgroundBeams } from "./HeroBeams";

export function BackgroundBeamsDemo() {
  return (
    (<div
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          👋 am Krishna Mohan P.V.S
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
         With over 4.5 years of experience in web development, I specialize in creating robust and scalable applications using modern technologies. My passion lies in building user-centric solutions that combine clean code with intuitive design.

I'm constantly learning and adapting to new technologies, believing that staying current is key to delivering the best solutions. Whether it's front-end development, back-end architecture, or full-stack implementation, I approach each project with dedication and creativity.
        </p>
        
      </div>
      <BackgroundBeams />
    </div>)
  );
}
