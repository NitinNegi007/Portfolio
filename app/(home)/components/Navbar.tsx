import { cn } from "@/lib/utils";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
export  function Navbar ({className}:{className:string}) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/nitin-negi-a76a1a24b/",
      label: "Linkedin",
      Icon: FaLinkedin,
    },
    {
      link: "https://github.com/NitinNegi007",
      label: "Github",
      Icon: FaGithub,
    },
    {
      link: "",
      label: "X",
      Icon: FaXTwitter,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center",
    className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Nitin Negi 🧑‍💻
      </h1>
      <div className="flex items-center gap-5">
        
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <a 
            href={social.link}
             key={index} 
             aria-label={social.label}
             >
              <Icon/>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
