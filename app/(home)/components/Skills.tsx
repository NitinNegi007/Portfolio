"use client"
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
export const Skills = () => {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "Nextjs",
      Icon: SiNextdotjs,
    },
    {
      text: "NodeJs",
      Icon: SiNodedotjs,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Postgresql",
      Icon: SiPostgresql,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "Tailwindcss",
      Icon: SiTailwindcss,
    },
    {
      text: "Express",
      Icon: SiExpress,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills "
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};
