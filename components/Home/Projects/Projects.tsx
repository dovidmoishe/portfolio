import React from "react";
import Image, { StaticImageData } from "next/image";
import edulearn from "@/../public/projects/edulearn.png";
import isitsafe from "@/../public/projects/isitsafe.png";
import challenge from "@/../public/projects/challenge.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
interface Project {
  name: string;
  role: string;
  description: string;
  year: string;
  link: string;
  previewImage: StaticImageData;
}

const projects: Project[] = [
  {
    name: "EduLearn.fun",
    role: "Fullstack Development",
    description: "A web3 AI study companion that currently has 1000+ users",
    year: "2025",
    link: "https://edulearn.fun",
    previewImage: edulearn,
  },
  {
    name: "isitsafe.io",
    role: "Frontend Development",
    description: "A crypto reviews platform for projects that help build trust from the community through platform scores",
    year: "2022 - Now",
    link: "https://isitsafe.io",
    previewImage: isitsafe,
  },
  {
    name: "Challenge App",
    role: "MERN Stack Development",
    description: "An app that helps you track and save progress on challenges using MongoDB and Express. Built for a hackathon",
    year: "2022",
    link: "https://github.com/dovidmoishe/challenge-app-backend",
    previewImage: challenge,
  },
];

const ProjectCard = (projectData: Project) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="w-full aspect-video overflow-hidden rounded-lg mb-4 md:mb-6 bg-gray-100">
        <Image
          src={projectData.previewImage}
          alt={projectData.name}
          width={1920}
          height={1080}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[28px] md:leading-[32px] lg:leading-[36px]">
              {projectData.name}
            </p>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[20px] md:leading-[22px] lg:leading-[24px] opacity-[0.7]">
              {projectData.role}
            </p>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[20px] md:leading-[22px] lg:leading-[24px] opacity-[0.7] whitespace-nowrap">
              {projectData.year}
            </p>
            <Link
              href={projectData.link}
              target="_blank"
              className="flex items-center gap-2 text-[14px] md:text-[15px] lg:text-[16px] font-medium hover:gap-3 transition-all duration-300"
            >
              View Project
              <FaArrowRight size={14} className="md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px]" />
            </Link>
          </div>
        </div>

        <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[20px] md:leading-[22px] lg:leading-[24px] opacity-[0.6]">
          {projectData.description}
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="mt-[60px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 px-[16px] md:px-[32px] lg:px-[64px]">
        <div className="flex flex-col">
          <p className="opacity-[0.7] text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[28px] md:leading-[32px] lg:leading-[36px]">
            Portfolio
          </p>
          <p className="leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold text-[24px] md:text-[28px] lg:text-[30px]">Selected Works</p>
        </div>

        <p className="leading-[24px] md:leading-[28px] lg:leading-[30px] text-[14px] md:text-[14px] lg:text-[15px] font-normal text-black opacity-[0.7] md:max-w-[300px] lg:max-w-none">
          A curated selection of projects I've worked on across design,
          development, and product.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px] gap-y-[40px] md:gap-y-[50px] lg:gap-y-[60px] px-[16px] md:px-[32px] lg:px-[64px] mt-[40px] md:mt-[50px] lg:mt-[60px]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
