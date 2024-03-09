
import { MovingBorder, MovingBorderBtn } from "@/components/ui/moving-border";
import React from "react";
import Title from "./Title";

export const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-10 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500 ">
            {"I'm Nitin."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-grey-300">
          {
            "I'm a Full Stack Developer passinate about building website application that user love."
          }
        </p>
        <a href={"mailto:nitinnegi5062@gmail.com"} className="inline-block">
       <Title text="Contact Me 📭"/>
        </a>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative ">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-400"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-400"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-400"></div>
            <div className="w-32 h-32 rounded-full bg-green-400"></div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
        <p>Available for work🥰</p>
      </MovingBorderBtn>
      </div>
    </div>
  );
};
